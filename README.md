This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

- [Ollama](https://ollama.com/) needs to be installed and running to host the LLM which is going to be serve as the app's assisant brain.
  `brew install ollama`
- Once installed you can run it with `ollama serve`. This will start the ollama server in `localhost:11434`, which is set by default. **The app assumes that Ollama is running in that address, so don't reconfigure it.**
- Download any model you want to use it on the app. For instance, the model we're currently using are `mistral` for the `ChatOllama` instance and `mxbai-embed-large` for the `OllamaEmbeddings`. So, after starting up the ollama server, you can pull them with `ollama pull mistral` and `ollama pull mxbai-embed-large`. Each model weights 4GB aprox, so go take a coffee while they're pulled.
  If you want to use other models, feel free to pull them and set them for the `ChatOllama` and `OllamaEmbeddings`.

## Getting Started

- Install the dependencies first and then run `npm run dev` locally.
- You'll see a simple form with an input and a submit button. Write the question in the input and submit the form to communicate with the assistant. The query time can take a some time, so be patient (this should be reviewed for better Ux and Dx).
