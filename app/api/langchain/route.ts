import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/ollama";
import { NextRequest, NextResponse } from "next/server";
import { systemPrompt } from "./systemPrompt";
import { OllamaEmbeddings } from "@langchain/ollama";
import { TextLoader } from "langchain/document_loaders/fs/text";

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { StringOutputParser } from "@langchain/core/output_parsers";

// POST http://localhost:3000/api/langchain

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ollamaLLM = new ChatOllama({
    model: "mistral",
    temperature: 0,
  });

  const loader = new TextLoader("app/api/langchain/rag.md");
  const docs = await loader.load();

  const embeddings = new OllamaEmbeddings({
    model: "mxbai-embed-large", // Default value
  });

  const userQuestion = await request.json();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 0,
  });

  const allSplits = await splitter.splitDocuments(docs);

  const vectorStore = await MemoryVectorStore.fromDocuments(
    allSplits,
    embeddings
  );

  // const vectorStore = await Chroma.fromDocuments(allSplits, embeddings, {
  //   collectionName: "myLangchainCollection",
  //   url: "http://localhost:8000", // Optional, will default to this value
  // });n

  const relatedDocs = await vectorStore.similaritySearch(userQuestion);

  const prompt = ChatPromptTemplate.fromTemplate(`
  	${systemPrompt}
  	Strictly use the context to answer to the question in crisp and point to point.
  		<context>
  			{context}
  		</context

      <question>
  			{question}
  		</question

  	`);

  // const combineDocsChain = await createStuffDocumentsChain({
  //   llm: ollamaLLM,
  //   prompt,
  // });

  // combineDocsChain.invoke({
  //   context: relatedDocs,
  // });

  // const retrievalChain = await createRetrievalChain({
  //   combineDocsChain,
  //   retriever: vectorStore.asRetriever(),
  // });

  // const llmResponse = await retrievalChain.invoke({ input: userQuestion });

  // return NextResponse.json(llmResponse.answer);

  const chain = await createStuffDocumentsChain({
    llm: ollamaLLM,
    outputParser: new StringOutputParser(),
    prompt,
  });

  const llmResponse = await chain.invoke({
    context: relatedDocs,
    question: userQuestion,
  });

  return NextResponse.json(llmResponse);
}
