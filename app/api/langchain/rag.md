# Why does the model I get from Qatium differ from the one I uploaded?

Permalink: [Why does the model I get from Qatium differ from the one I uploaded?](https://help.qatium.com/hc/en-us/articles/26188165919121-Why-does-the-model-I-get-from-Qatium-differ-from-the-one-I-uploaded)

Once you upload your data to Qatium, we transform it into a digital replica of your network ready to operate with. To do so, **we run some checks and apply some changes** to your model if we need to.

Especially **for .inp models**, we transform linear elements (valves and pumps) into point elements. In some cases, to avoid network topology problems, we create additional pipelines if we it’s impossible to simplify the geometry.

That’s why you might notice that the model you get from Qatium differs from the original one.

Learn more about how Qatium works in [this article](https://help.qatium.com/hc/en-us/articles/23063998429585-How-Qatium-works).

# What is the largest file I can upload to Qatium?

Permalink: [What is the largest file I can upload to Qatium?](https://help.qatium.com/hc/en-us/articles/26158089703953-What-is-the-largest-file-I-can-upload-to-Qatium)

There is no limit to the data you can upload to Qatium for a typical network. There are no restrictions on the file size or the number of elements per network, either. Although the import process might take longer with complex models.

If the density and complexity of your model is higher than normal, please [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369) and we’ll make sure everything runs smoothly for you.

Qatium performance will depend mainly on your Internet connection and the device you are using. So if you are experiencing problems with that, please make sure you follow the [system requirements](https://help.qatium.com/hc/en-us/articles/16868067610513).

# What languages does Qatium support?

Permalink: [What languages does Qatium support?](https://help.qatium.com/hc/en-us/articles/26013770142481-What-languages-does-Qatium-support)

You can set the language of Qatium interface to English (AmE) or Spanish. To do so, **set your browser language options**, and Qatium will automatically apply the same for the interface.

When talking to Q, your digital water assistant, you can use whatever language you are most comfortable with. But bear in mind that Q are still learning and some translations may not be that accurate.

# Qatium crashes when I try to ignore a layer

Permalink: [Qatium crashes when I try to ignore a layer](https://help.qatium.com/hc/en-us/articles/26010457759377-Qatium-crashes-when-I-try-to-ignore-a-layer)

Recategorizing and ignoring network layers entail changes not only to the view but also to the structure and performance of your network.

In this case, ignoring a layer can result on a non-simulable model. Meaning that probably the layer you want to ignore is neccessary to build the network model.

# Files examples

Permalink: [Files examples](https://help.qatium.com/hc/en-us/articles/25599759805713-Files-examples)

We have built some examples of the main files you can upload into Qatium. Click on each link to download a demo of the data to include when building a network.

# Log in and tour Magnetic Island

Permalink: [Log in and tour Magnetic Island](https://help.qatium.com/hc/en-us/articles/25470279044625-Log-in-and-tour-Magnetic-Island)

To introduce you to Qatium, we've created a **demo network** called Magnetic Island. It includes many of the **elements** you could have **in your own network**: hydrants, pipes, pumps, tanks... It’s a great way to explore all the functionalities before importing your first network.

![onboarding-your-step-1.gif](https://help.qatium.com/hc/article_attachments/25470279036433)

[Log in and tour Magnetic Island to get to know the platform](https://qatium.app)

If you haven’t signed up yet, go [create your account first](https://help.qatium.com/hc/en-us/articles/16164055312785-Sign-up).

Dive deeper into the interface by visiting our [Navigation guides](https://help.qatium.com/hc/en-us/categories/23456257693585-Navigation-guides).

[What's next? ➡️  
Run your first Qatium scenario](https://help.qatium.com/hc/en-us/articles/25470498417809)

# Set the network projection

Permalink: [Set the network projection](https://help.qatium.com/hc/en-us/articles/23509780309649-Set-the-network-projection)

We encourage you to set your network projection to ensure that its location on the map is accurate.

Qatium locates your network in different ways, depending on the type of files you upload and the information they include.

Here’s how it works for each type of file:

**EPANET.inp**

| Type of file | Projection included? | What Qatium does                          |
| ------------ | -------------------- | ----------------------------------------- |
| EPANET .inp  | No                   | Helps you select the most accurate option |
| Yes          | Reads variable:      |

Q_VAR_PROJECTION=\[EPSG code:xx\]

E.g. Q_VAR_PROJECTION=EPSG:20255|

Right after the import is complete, if your .inp doesn’t include a projection Q will guide you to find the most suitable one.

1. Find your network location on the map
2. Q will suggest different projection candidates
3. Select the most accurate one and click _Ok_

![Q-PROJECTION_UNPROJECTED.gif](https://help.qatium.com/hc/article_attachments/23510125658385)

**GIS**

| Type of file | Projection included?          | What Qatium does                                         |
| ------------ | ----------------------------- | -------------------------------------------------------- |
| Shapefiles   | No                            | Ignores the layer                                        |
| Yes          | Reads .prj file information   |
| GeoJSON      | No                            | Assumes GeoJSON canonical projection (WGS84 / EPSG:4326) |
| Yes          | Reads the projection declared |

**Both .inp + GIS**

| Type of file | Projection included? | What Qatium does                                |
| ------------ | -------------------- | ----------------------------------------------- |
| .inp + GIS   | Yes - .inpYes - GIS  | Reads the projection declared in each file type |

|No - .inp

Yes - GIS|Uses the projection of the first GIS source we process|
|GeoJSON|No|Assumes GeoJSON canonical projection (WGS84 / EPSG:4326)|
|Yes|Reads the projection declared|
|EPANET .inp|No|Helps you select the most accurate option|
|Yes|Reads variable:

Q_VAR_PROJECTION=\[EPSG code:xx\]

E.g. Q_VAR_PROJECTION=EPSG:20255|
|GIS (Shapefile)|No|Ignores the layer|
|Yes|Reads .prj file information|
|GIS (GeoJSON)|No|Assumes GeoJSON canonical projection (WGS84 / EPSG:4326)|
|Yes|Reads the projection declared|
|Both .inp + GIS|Yes - .inp|Reads variable:

Q_VAR_PROJECTION=\[EPSG code:xx\]|
|Yes - Shapefile|Reads variable:

Q_VAR_PRJ to specify the .prj file content|
|Yes - GeoJSON|Reads the projection declared|

## Change projection

If your network seems misplaced, you can always change the location of your network.

1. Open the assistant by clicking on Q chat ![q-assistant-icon.png](https://help.qatium.com/hc/article_attachments/25197534482449) icon
2. Select _Change its location_
3. Go over the projection candidates and select the correct one

![Q-PROJECTION.gif](https://help.qatium.com/hc/article_attachments/23510931390993)

# Data display

Permalink: [Data display](https://help.qatium.com/hc/en-us/articles/23508367926289-Data-display)

When interacting with assets, tooltips and popovers will show your sensor data.

![DATA DISPLAY.png](https://help.qatium.com/hc/article_attachments/23508367918481)

# Upload readings in a CSV file

Permalink: [Upload readings in a CSV file](https://help.qatium.com/hc/en-us/articles/23507245352721-Upload-readings-in-a-CSV-file)

When you add readings to your network, you can evaluate its performance by comparing simulation results with historical data.

You can easily import readings in **CSV files**.

Just drag & drop your file(s) over the network and Q will give you instant feedback on the outcome of the upload.

![](https://help.qatium.com/hc/article_attachments/23507245345169)

Once the readings file is uploaded, you need to refresh your browser and the network will reflect the new data immediately.

Below you can find a few important points to remember when adding readings to your network.

## File format

Currently, CSV files need to be **uploaded separately** from any other file formats. In other words, don’t zip your reading files along with the rest of your data and upload them during import.

Your CSV files must have a **specific structure** so that Qatium can interpret them correctly. The data columns may be in **any order**, but they should have the exact **same labels** as shown below:

|              |      |       |        |      |       |
| ------------ | ---- | ----- | ------ | ---- | ----- |
| Column label | Time | Asset | Metric | Unit | Value |
| Type of data |

YYYY-MM-DD HH:MM:SS|||||

For example, you can submit either of the two versions below and expect the same result in Qatium:

```
"time","asset","metric","value","unit""2024-01-01 00:00:00","Cocklebay","level","1.807","m""2024-01-01 00:00:00","J_00432","pressure","66.105","m""2024-01-01 00:00:00","M_Arcadia_DMA","flow","1.723","l/s""2024-01-01 00:00:00","Mandalay_P1","setting","0","""2024-01-01 00:00:00","Mandalay_P2","setting","0.951",""
```

**OR**

```
"asset","metric","value","unit","time""Cocklebay","level","1.807","m","2024-01-01 00:00:00""J_00432","pressure","66.105","m","2024-01-01 00:00:00""M_Arcadia_DMA","flow","1.723","l/s","2024-01-01 00:00:00""Mandalay_P1","setting","0","","2024-01-01 00:00:00""Mandalay_P2","setting","0.951","","2024-01-01 00:00:00"
```

**Tip from Q**:  
Download the [CSV file example](https://help.qatium.com/hc/article_attachments/25601577794577) in the additional resources for a demo of the data to include.

## Upload readings to various networks

You can upload readings for all your networks **simultaneously**, directly from your workspace.

Here’s how to do it:

1. Locate and copy each **network ID**. The network ID is a unique identifier used by Qatium. It’s a long hexadecimal string (UUID) placed in the network URL.

![](https://help.qatium.com/hc/article_attachments/23507245346193)

2. Add the network ID to the **file name**, right before the file extension.

For example, _cdb99c6a-ce8f-4269-ab61-474b684d637f.csv_

**OR**

Add the network ID to an **extra column inside the file**, as shown below:

```
"network","time","asset","metric","value","unit""cdb99c6a-ce8f-4269-ab61-474b684d637f","2024-01-01 00:00:00","Cocklebay","level","1.807","m""cdb99c6a-ce8f-4269-ab61-474b684d637f","2024-01-01 00:00:00","J_00432","pressure","66.105","m""cdb99c6a-ce8f-4269-ab61-474b684d637f","2024-01-01 00:00:00","M_Arcadia_DMA","flow","1.723","l/s""3cb07639-98ab-4f3a-94e5-a6ae85369945","2024-01-01 00:00:00","Mandalay_P1","setting","0","""3cb07639-98ab-4f3a-94e5-a6ae85369945","2024-01-01 00:00:00","Mandalay_P2","setting","0.951",""
```

Here's how it would look like in a spreadsheet editor like Excel or Google Sheets:_![](https://help.qatium.com/hc/article_attachments/23507245346833)_

As with the rest of the columns, the order is irrelevant, but the label of the column needs to be _Network_.

## Resources

# Upload your network

Permalink: [Upload your network](https://help.qatium.com/hc/en-us/articles/23489615211921-Upload-your-network)

You can create a new network in Qatium by uploading your existing [hydraulic model](https://help.qatium.com/hc/en-us/articles/19560097366929-Glossary#h_01HDJXHM639QMA2WQ21EGSVZFK:~:text=to%20Supply%20source-,Hydraulic%20model,-A%20collection%20of) as an **EPANET input file (.inp)** or just your **GIS data** – and we’ll create the model for you. You can also combine both .inp and GIS files to have the most complete network.

## Upload options

Regardless of the [type of files](https://help.qatium.com/hc/en-us/articles/23064699184785-Upload-your-network) you have, there are 2 ways to upload them: use the **_Upload_ buttons** in the workspace or **directly drag & drop** your files into the platform.

![Upload options_Q.png](https://help.qatium.com/hc/article_attachments/24938274587281)

## Upload step-by-step

As you will see below, uploading a network is a simple two-step process. If you're having issues with your import, please [contact us](https://help.qatium.com/hc/requests/new?ticket_form_id=16143842484369); our support team will be happy to assist.

### EPANET (.inp) file

If you already have a hydraulic model, you can simply import the EPANET input file (.inp) into Qatium. Here’s how:

1. Select your file
2. Drag & drop it into the interface

![UPLOAD INP.gif](https://help.qatium.com/hc/article_attachments/23489900899857)

**Tip from Q**:  
Download the [.inp file example](https://help.qatium.com/hc/article_attachments/25601306672785) in the additional resources for a demo of the data to include.

**Important**:

- Please note that you can only upload one single .inp file at a time. Otherwise, we’ll process the first one and ignore the rest.
- If your network doesn’t include a projection, Q will prompt you to select the most accurate one among various candidates.

Learn more about projections in [this article](https://help.qatium.com/hc/en-us/articles/23509780309649-Set-the-network-projection).

### GIS files

If you don’t have a hydraulic model yet, Q will help you create one from your GIS data.

1. Select or zip all your layers (Shapefiles or GeoJSONs)
2. Drag & drop them into the interface

![UPLOAD GIS.gif](https://help.qatium.com/hc/article_attachments/23490227292433)

**Tip from Q**:  
Download the [GIS template](https://help.qatium.com/hc/article_attachments/25601276327185) in the additional resources for a demo of the data to include.

**Important**:

- For each layer, all Shapefiles should be uploaded at the same time, using the same filename and corresponding file extension.
- For the upload to be successful, the following Shapefiles are mandatory: .shp, .shx, .dbf and .prj.

### EPANET (.inp) and GIS combined

You can also upload both an .inp and GIS files at the same time:

1. Zip your files in a single folder
2. Drag & drop it into the interface.

**Tip from Q**:  
You can repeat the steps above to create as many networks as you wish (from your workspace).

## Upload completed

Whichever upload option you choose, once the import process is completed, your new network will open up automatically.

Q, our digital assistant, will welcome you, bring you up to speed on the import process and recommend options for your next steps.

![Q UPLOAD COMPLETED.png](https://help.qatium.com/hc/article_attachments/23490685704337)

As easy as that, you’re now ready to work with your network.  
However, if you want to make the most of it, we have some recommendations for you.

Learn more about them in [this section](https://help.qatium.com/hc/en-us/sections/23489540940433-Best-practices).

In the meantime, here are some simple actions for you to get familiar with your new network(s):

- If your networks don't fit on a single page, use the page selector ![chevron-left-button.png](https://help.qatium.com/hc/article_attachments/25197496333969)![chevron-right-button.png](https://help.qatium.com/hc/article_attachments/25197558666513) to move to the next/previous page, or type the network’s name in the search bar and we’ll find it for you.
- If you have more than one network, you can sort them using the network sorting options ![chevron-down-button.png](https://help.qatium.com/hc/article_attachments/25197558673553), or directly find the one you need using the search bar.

![Workspace controls.png](https://help.qatium.com/hc/article_attachments/24938459691537)

As a [network Owner](https://help.qatium.com/hc/en-us/articles/23069891400977-Roles-in-networks), there're a few more things you can do to manage your network.  
Learn more about them in [this article](https://help.qatium.com/hc/en-us/articles/23508207518609-Network-owner-options).

## Resources

# Network display controls

Permalink: [Network display controls](https://help.qatium.com/hc/en-us/articles/23456791185809-Network-display-controls)

You can customize the view of your network for any of your tasks in Qatium using the buttons on the left side of your screen:

![Network display controls.png](https://help.qatium.com/hc/article_attachments/27362962105873)

## Work modes

On the top left side of the map, you will find the _Work modes_ ![work-modes-panel-button.png](https://help.qatium.com/hc/article_attachments/25197113381649) panel, which allows you to switch between different work modes inside the platform.

![Work modes highlighted.png](https://help.qatium.com/hc/article_attachments/27362993164561)

This functionality is particularly useful when you want to test out different scenarios, as it allows you to quickly focus on concrete tasks.

Learn more about work modes in [this article](https://help.qatium.com/hc/en-us/articles/23184926672529-Work-modes).

## Network versions

On the top left side, right below the Work Modes panel, you’ll see the _Network versions_ ![network-versions-panel-button.png](https://help.qatium.com/hc/article_attachments/25197113389969) panel.

![Network versions highlighted.png](https://help.qatium.com/hc/article_attachments/23457485452561)

Whenever you test changes in your network, Qatium will switch automatically from _My network_ to _My scenario_.

This way, you can compare the two and evaluate the impact of the changes.

Learn more about network versions in [this article](https://help.qatium.com/hc/en-us/articles/23185286963601-Network-versions).

## Network layers

On the bottom left side of the map, the first button you’ll see is the _Network layers ![network-layers-panel-button.png](https://help.qatium.com/hc/article_attachments/25197113396369) button._

Use it to open up a panel that allows you to:

- **Add** new data
- **Recategorize** the existing layers (reassign some data to a different type of layer)
- **Ignore** a layer

Learn more about network layers in [this article](https://help.qatium.com/hc/en-us/articles/23512027218321-Update-your-network).

## Network levels

The _Network levels_ ![network-levels-panel-button.png](https://help.qatium.com/hc/article_attachments/25197097214737) button allows you to switch the view of your [network level](https://help.qatium.com/hc/en-us/articles/19560097366929-Glossary#h_01HDK524787JZ1N03SNXB0TXCQ:~:text=NRW%2C%20Readings-,Network%20levels,-Water%20supply%20networks) from _Arterial_ to _Distribution_ level (or maintain both). In Qatium, this means viewing only arterial or distribution pipes (or both at the same time).

![NETWORK LEVELS.gif](https://help.qatium.com/hc/article_attachments/23458340240401)

## Network elements

The *Network elements ![network-elements-panel-button.png](https://help.qatium.com/hc/article_attachments/25197097220497)*button allows you to display or hide the elements in your network at will.

This way, you can easily focus on the elements that interest you the most at any given moment.

![NETWORK ELEMENTS.gif](https://help.qatium.com/hc/article_attachments/23458340261137)

# Watermain shutdown

Permalink: [Watermain shutdown](https://help.qatium.com/hc/en-us/articles/23187104077585-Watermain-shutdown)

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198334503569)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198363067025)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198334536337) |

If you need to find the best option to isolate pipes and identify the valves that must be closed to carry out maintenance, this functionality is for you!

Performing a shutdown with Qatium allows you to **simulate pipe isolation** in a network, determine the valves involved, and visualize the impact on your customers.

This is how the _Shutdown_ panel looks like:

![Shutdown panel.png](https://help.qatium.com/hc/article_attachments/23187104062737)

## Perform a shutdown

To perform a shutdown:

1. Activate the _Shutdown_ work mode to hide any unnecessary distractions and  
   focus only on your scenario.
2. Select and close a pipe using the toggle bar ![toggle-off-button.png](https://help.qatium.com/hc/article_attachments/25198334553489) in the _Shutdown_ panel ![shutodown-panel-button.png](https://help.qatium.com/hc/article_attachments/25198363110033).  
   You can repeat this process to close other pipes as many times as you need.

![SHUTDOWN.gif](https://help.qatium.com/hc/article_attachments/23187088815889)

Qatium will identify and close the valves near the selected pipes, from the current hour until the end of the day.

The _Shutdown_ panel will show isolation valves, alternative supply valves, and the customer points affected by the shutdown. To quickly locate valves, **click on the** **_locate valve_** ![locate-asset-button.png](https://help.qatium.com/hc/article_attachments/25198334572817)**icon** in the panel and you’ll go directly to that valve in the map.

## Broken and other non-operable valves

When a proposed valve is not being operated in real life because of failure, lack of access, or any other reasons, you can try other options to achieve pipe isolation.

Mark any valve affecting the shutdown as non-operable by clicking on the _Exclude valve_ ![exclude-button.png](https://help.qatium.com/hc/article_attachments/25198363130001) icon from the _Shutdown_ panel. Qatium will find suitable alternative valves and use them instead.

![NON-OPERABLE VALVES.gif](https://help.qatium.com/hc/article_attachments/23187088821009)

## Alternative supply for affected customers

Sometimes, after performing a shutdown over a pipe, a collateral area could end up being isolated. In these cases, there can be options to supply water to that area without affecting the shutdown operation. If that's the case, you'll see a list of valves you can open to resupply the area and limit the number of consumers affected to a minimum.

1. Go to the list of alternative valves
2. Click on the toggle ![](https://help.qatium.com/hc/article_attachments/23187104069265) to open the valve

![RESUPPLY.gif](https://help.qatium.com/hc/article_attachments/23187088828433)

You’ll see information both in the map and the _Shutdown_ panel about the impact of the closure, including:

- The **number of isolated customers by the shutdown** (highlighted in dark blue on the map)
- The customers that are collaterally affected by the shutdown, but **cannot be resupplied** (highlighted in dark gray on the map). I.e.: when performing a shutdown up from a cul-de-sac.
- The **isolated customers that can be resupplied** by opening an alternative supply valve (highlighted in soft gray on the map)

![Supply interruptions.png](https://help.qatium.com/hc/article_attachments/23187088832273)

We recommend **importing the customers or flow meter locations**, so you see the correct amount of customers affected. Learn how to add customer points to your network by reading [this article](https://help.qatium.com/hc/en-us/articles/23156554634513).

**Important**:  
The panel and the map will show only the isolated customers for the selected isolated area. When performing multiple shutdowns in the same scenario, select the desired pipe to see detailed information about the shutdown.

# What's a scenario?

Permalink: [What's a scenario?](https://help.qatium.com/hc/en-us/articles/23184711694993-What-s-a-scenario)

With Qatium, you can **test different situations and operations** before executing plans in the physical world. That’s what we call **running scenarios**.

You’ll be able, among many other things, to assess the impact of watermain shutdowns, design and adapt flushing sequences, and test as many “what if” questions as you need. Running scenarios with Qatium enables you to easily **check the differences between the current state of your network and the operations you are testing** in a completely risk-free environment.

For you to focus on specific tasks we’ve created [work modes](https://help.qatium.com/hc/en-us/articles/23184926672529); and to quickly check the difference between your actual network and the scenario version of it you have the [Network Versions panel](https://help.qatium.com/hc/en-us/articles/23185286963601).

Check the most common use cases in [this](https://help.qatium.com/hc/en-us/sections/23063233507729-Use-cases) [ar](https://help.qatium.com/hc/en-us/sections/23063233507729-Use-cases)[ticle](https://help.qatium.com/hc/en-us/sections/23063233507729-Use-cases).

Learn how to run specific scenarios by visiting the following articles:

- [Watermain shutdown](https://help.qatium.com/hc/en-us/articles/23187104077585-Watermain-shutdown)
- [Flushing](https://help.qatium.com/hc/en-us/articles/23188759915793-Flushing)
- [Tank management](https://help.qatium.com/hc/en-us/articles/23187934088721-Tank-management)
- [Pressure management](https://help.qatium.com/hc/en-us/articles/23188450723857-Pressure-management)
- [Fire flow capacity](https://help.qatium.com/hc/en-us/articles/24068465080721)

# Accepted aliases for element’s type

Permalink: [Accepted aliases for element’s type](https://help.qatium.com/hc/en-us/articles/23182914185233-Accepted-aliases-for-element-s-type)

|                |                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Element type   | Aliases                                                                                                                                                                                                                         |
| Supply sources | source, reservoir, fuente, embalse, pozo, well, suppl, suministro, inyeccion, import, input, entrada, wtp, wtw, sondeo                                                                                                          |
| Tanks          | tank, tanque, deposito, almacenamiento, tower                                                                                                                                                                                   |
| Pumps          | pump, bomba, impulsion, booster, bombeo                                                                                                                                                                                         |
| Valves         | valve, valvula, shutoff, tcv, gpv, prv, psv, fcv, pbv, regula, control, llave, grifo, reductora, reducing, reducer, backflow                                                                                                    |
| Junctions      | junction, hydrant, hyd, fitting, meter, contador, medidor hidrante, nodo, nudo, ventosa, incendio, boca, cruce, sensor, logger, service, connection, desague, caudalimetro, clorador, filtro, muestreo, sondeo, toma_de_presion |
| Zones          | zone, zona, dma, sector                                                                                                                                                                                                         |

**Important**:  
Aliases are insensitive to case, accents and more than one space. For example, if you write zone instead of Zone the platform will still process it correctly.

# Pipes

Permalink: [Pipes](https://help.qatium.com/hc/en-us/articles/23125169946257-Pipes)

Here you have all the **specifications for pipe’s properties and how to modify them both in GIS editor and EPANET**. Check [this table](https://help.qatium.com/hc/en-us/articles/23182981293969) to see all accepted aliases for each property.

Qatium will process that information by running some validation checks and we’ll try to fill any gaps.

Learn more about **how Qatium works** in [this article](https://help.qatium.com/hc/en-us/articles/23063998429585).

More details about **EPANET specifications**[here](https://epanet22.readthedocs.io/en/latest/index.html).

**Status**

**Data you add to your files**

| GIS editor |
| ---------- | ------ |
| Field      | Status |
| Attribute  | Open   |

Closed

CV|

| EPANET   |
| -------- | -------------- |
| Property | Initial Status |
| Value    | Open           |

Closed

CV|

**How Qatium processes that data**

If there's no data or it doesn't pass the validation stage, Qatium will apply a default value: **Open**.

You can also modify the pipe’s status directly in Qatium using the Shutdown panel. But bear in mind that this state won’t persist in your network as it’s just an imaginary scenario.

**Laterals**

**Data you add to your files**

| GIS editor |
| ---------- | ------- |
| Field      | Group   |
| Attribute  | lateral |

| EPANET   |
| -------- | ----------- |
| Property | Description |
| Value    | lateral     |

**Tip from Q**:  
Download the [GIS file example](https://help.qatium.com/hc/article_attachments/25601736066065) in the additional resources for a demo of the data to include.

**How Qatium processes that data**

If there's no data or it doesn't pass the validation stage, Qatium will apply a default value: **Main.**

If you include laterals in your network, you can also add [customer points](https://help.qatium.com/hc/en-us/articles/23156554634513), even if they are not directly connected to them.

**Notes:**You can also specify laterals directly in the .inp file using a text editor. Edit the file including the group in the description or in the extra properties column that appears on fifth position. Example: DI_20220706_1.2_12.5_lateral;aDescription

**Material**

**Data you add to your files**

| GIS editor |
| ---------- | --------------- |
| Field      | Material        |
| Attribute  | Material name\* |

| EPANET   |
| -------- | ----------------------------------- |
| Property | Description                         |
| Value    | \[Material\]\_\[other information\] |

Example: _DI_20220706_|

**How Qatium processes that data**

If not specified, Qatium will ignore it.

\*[Check here the accepted pipe materials and their aliases](https://help.qatium.com/hc/en-us/articles/23183083685777)

**Installation date**

**Data you add to your files**

| GIS editor |
| ---------- | ----------------- |
| Field      | Installation date |
| Attribute  | YYYYMMDD          |

| EPANET   |
| -------- | ----------- |
| Property | Description |
| Value    | YYYYMMDD    |

Example: _DI_20220706_|

**How Qatium processes that data**

If not specified, Qatium will ignore it.

**Length**

**Data you add to your files**

| GIS editor |
| ---------- | ------ |
| Field      | Length |
| Attribute  |        |

| EPANET   |
| -------- | ------ |
| Property | Length |
| Value    |        |

**How Qatium processes that data**

If there's no data or doesn't pass the validation stage, Qatium will apply default values. Here, **the default value for length will be calculated from the pipe geometry**.

Qatium uses the turf.js library to do so, without taking into account the elevation of each vertex. The length is rounded to 2 decimal places for both systems of units.

**Diameter**

**Data you add to your files**

| GIS editor |
| ---------- | -------- |
| Field      | Diameter |
| Attribute  |          |

| EPANET   |
| -------- | -------- |
| Property | Diameter |
| Value    |          |

**How Qatium processes that data**

If there's no data or doesn't pass the validation stage, Qatium will apply a default value:

| SI units | US units |
| :------: | :------: |
|  50 mm   |   2 in   |

**Roughness & headloss equation**

**Data you add to your files**

| GIS editor |
| ---------- | --------- |
| Field      | Roughness |
| Attribute  |           |

| EPANET   |
| -------- | --------- |
| Property | Roughness |
| Value    |           |

**How Qatium processes that data**

The equation (H-W, D-W or C-M) is inferred from roughness values (if available). If not, we’ll apply the default value: **Hazen-Williams (H-W), roughness = 148**.

Qatium can also infer roughness from [Material](https://help.qatium.com/hc/en-us/articles/23125169946257-Pipes#:~:text=Material,-Data%20you%20add) and [Installation date](https://help.qatium.com/hc/en-us/articles/23125169946257-Pipes#:~:text=Installation%20date,-Data%20you%20add), if available.  
Learn more about how Qatium infers roughness based on material and installation date in [this article](https://help.qatium.com/hc/en-us/articles/23183182648337).

**Minor loss**

**Data you add to your files**

| GIS editor |
| ---------- | ---------------- |
| Field      | Loss coefficient |
| Attribute  |                  |

| EPANET   |
| -------- | ---------------- |
| Property | Loss coefficient |
| Value    |                  |

**How Qatium processes that data**

If there's no data or it doesn't pass the validation stage, Qatium will apply a default value: **0**.

**Network levels**

Qatium performs network levels calculation during import, allowing for fast visualization of the arterial or distribution part of the network.

To **calculate network levels**, Qatium considers the [diameter](https://help.qatium.com/hc/en-us/articles/23125169946257-Pipes#:~:text=Diameter,-Data%20you%20add) of each pipe and defines the 80th percentile:

- Pipes below the 80th percentile are part of the distribution level.
- Pipes equal to or above are part of the arterial network.

Then, it **checks for network level consistency**:

- Every distribution pipe connected at both ends to arterial pipes is set to arterial
- Every arterial pipe not connected to an arterial path leading to a supply source is set to distribution
- Pipes connected to valves, pumps or tanks are considered as arterial regardless of their diameter (unless they are not connected to a supply source)

**Flow & velocities**

Flow and velocity are calculated through the simulation with all the data available and you’ll see it in the pipe’s information when hovering over or clicking on it.  
![Flow & velocity.png](https://help.qatium.com/hc/article_attachments/23129482534417) If you want to add historical data or readings to provide actual flow and velocity, read this article.

**Simple control rules**

**For both .inp and GIS files**, Qatium supports 3 kinds of [simple rules as defined in EPANET](https://epanet22.readthedocs.io/en/latest/input_keywords.html?highlight=controls#controls) for pipes, valves, and pumps. You can also include your rules in a field named \[“rule”, “rules”\].

**For GIS files only**, Qatium also accepts a short version of control rules: the element type and ID followed by a list of its different settings:

**_Element properties:_** _OPEN AT TIME 3_

Will be interpreted as _ELEMENT OPEN AT TIME 3_

If you specify these rules for all assets in just one asset’s properties, it will apply to every specified asset regardless of the location of the rule.

For example:

**_Pipe 1 properties:_** Pipe 1 OPEN AT TIME 3, _Valve 2 CLOSED AT TIME 2, Valve 2 OPEN AT TIME 3_

Will apply both to _Pipe 1_ and _Valve 2_, regardless of the valve’s rule being in the pipe’s properties.

Qatium accepts multiple control rules separators: tab, comma, semicolon, break line. If the control rule is not valid, it will be included in the model and the .inp file as a comment, in case the model is downloaded.

**Connecting pipes at T-junctions**

If one end of the pipe (not connected to another) spatially coincides with another pipe, **the latter is split and a junction is added at the intersection**.

The two resulting pipes inherit the properties of the original split pipe; only the length of each section is recalculated (proportionally to the original one).

In this case, a tolerance of 0.1 m is used and the ends of the new pipes are extended to the end of the pipe that generates the split. Normally, these extensions are not noticeable on the map.

**Thresholds**

If you have readings added to your network, **you can configure warnings by setting thresholds** (minimum and maximum values) for your assets, and if the data received is below or above them we’ll let you know.

**Data you add to your files**

| GIS editor |
| ---------- | -------------------------------------- |
| Field      | WarningThresholdMinWarningThresholdMax |
| Attribute  |                                        |

| EPANET   |
| -------- | -------------------------------------------------- |
| Property | Description                                        |
| Value    | \_\[WarningThresholdMin\]\_\[WarningThresholdMax\] |

Example: _\_1.2_12.5_|
Threshold values in .inp files should **follow the existing order** on the description. Use an underline to separate each value.

For example, for a pipe with the following data:

- Material: DI
- Installation date: 2024-07-12
- Threshold Min: 1.2
- Threshold Max: 12.5

The value in the description should be **_DI_2024-07-12_1.2_12.5_**

If we don’t have the material data, for example, the description then would be _\_2024-07-12_1.2_12.5_

Make sure the **units for the threshold values match the units of the variable** we're setting the warnings to. For pipe flow, use flow unit.

**How Qatium processes that data**

If not specified, Qatium will ignore it and you won’t receive any warnings.

**Important**:

For .inp files, in the description you can provide any combination of the data you have. However, the fields must be **in the following order:**

**\[Material\]\_\[InstallationDate\]\_\[WarningThresholdMin\]\_\[WarningThresholdMax\];\[anyInformation\]**

Example: _DI_20220706_1.2_12.5;aDescription_

## Resources

# Element type

Permalink: [Element type](https://help.qatium.com/hc/en-us/articles/23123922734097-Element-type)

Qatium only requires you to upload a pipe layer to create a network, but we recommend you upload as many element types as available to make the best of the platform.

## EPANET files

If you are using modeling tools like EPANET, the element type will be created automatically in the model (in the exported .inp file, it'll be shown as \[ELEMENT\]).

![Element type INP.png](https://help.qatium.com/hc/article_attachments/23123922718097)

## GIS files

For GIS files, you’ll need to name each file after the corresponding element type and Qatium will categorize them automatically.

![Element type GIS.png](https://help.qatium.com/hc/article_attachments/23123916252177)

Here’s how this automatic categorization works:

1. The layer is categorized as _Ignored_ if a filename contains any of the following aliases: non potable, no tratada, air valve, ventosa. Example:![Ignored GIS layer.png](https://help.qatium.com/hc/article_attachments/23123916255121)
2. If a file contains linear elements it is considered a pipe layer.
3. If a file contains **polygons** or multi-polygons with a zone alias in the filename (or a DemandPattern property in some element), it is considered a **zone layer**.
4. For files containing **point** or multipoint elements, we search for aliases in the file name. If there’s more than one element that matches, we associate the file to the **element type with the highest position** in [this table](https://help.qatium.com/hc/en-us/articles/23182914185233).

You can always **recategorize** your layer files at any time using the *[Network layers](https://help.qatium.com/hc/en-us/articles/23512027218321-Update-your-network#h_01HSG9FRXT474ENTQDVTHE25TS:~:text=You%20can%20recategorize%20your%20layers%20%E2%80%93%20that%20is%2C%20reassign%20data%20to%20a%20different%20type%20of%20layer%20%E2%80%93%2C%20or%20ignore%20any%20of%20them%20by%20clicking%20on%20the%20Network%20layers) ![network-layers-panel-button.png](https://help.qatium.com/hc/article_attachments/25197615383057)*panel. But please bear in mind that recategorization may impact the simulation and the network structure.

**Important**:  
If you update a network with GIS layers by uploading a new EPANET file, all existing layers will be marked as ignored, except for zone layers.

# Why do I receive a “Simulation is not available” message when running scenarios?

Permalink: [Why do I receive a “Simulation is not available” message when running scenarios?](https://help.qatium.com/hc/en-us/articles/23099909190545-Why-do-I-receive-a-Simulation-is-not-available-message-when-running-scenarios)

Qatium simulates the behavior of each network using the [EPANET toolkit](http://wateranalytics.org/EPANET/), which can raise some errors while it is calculating and/or finishing the simulation process without returning the results for all the hours shown in the timeline.

In the hours when there are results, they will be shown on the map, in the asset details, and in the pressure, flow, and tank autonomy panels. But if in a selected time step there are no available results, a “Simulation is not available” message will appear.

Some scenarios can cause the simulation to "stop" mid-execution. For example:  
If a pipe/valve/pump in the network is closed isolating the entirety of demands in the network, the simulation will be unsuccessful. This can happen for the whole simulation or for the time step when this closure occurs.

# I got an error when uploading readings in CSV files

Permalink: [I got an error when uploading readings in CSV files](https://help.qatium.com/hc/en-us/articles/23099824316305-I-got-an-error-when-uploading-readings-in-CSV-files)

Currently, CSV files need to be **uploaded separately** from any other file formats. You can’t zip your reading files along with the rest of your data and upload them during import.

# Wrong file type

Permalink: [Wrong file type](https://help.qatium.com/hc/en-us/articles/23098661299345-Wrong-file-type)

There can be multiple reasons for getting an error when uploading a network. Wrong file type is one of them. These are the files & formats supported by Qatium:

- CSV—for [readings](https://help.qatium.com/hc/en-us/articles/23507245352721-Upload-readings-in-a-CSV-file), [signal mapping](https://help.qatium.com/hc/en-us/articles/23508344352785-Add-signal-mappings) and [customer points](https://help.qatium.com/hc/en-us/articles/23156554634513-Customer-points).
- EPANET (.inp)—Qatium only supports **1 .inp file at a time**, otherwise we’ll process the first one and ignore the rest.
- GIS files
  - GeoJSON
  - Shapefiles

If you have uploaded a supported file and still receive an error, check the following articles.

- [Errors uploading .inp files](https://help.qatium.com/hc/en-us/articles/23098832178577-I-uploaded-a-inp-file-and-it-s-not-working)
- [Error uploading GIS files](https://help.qatium.com/hc/en-us/articles/23098907371281-Uploading-GIS-files-is-not-working)

If anything works, please [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# How to contact Qatium Support

Permalink: [How to contact Qatium Support](https://help.qatium.com/hc/en-us/articles/23097365219089-How-to-contact-Qatium-Support)

We’re always here to support you. Get in touch with us by filling out [this form](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369), and we’ll get back to you as soon as possible.

If you prefer, you can directly ask Q, our digital assistant, from inside Qatium’s platform. Q will provide you with information about (almost) anything you might need help with.

![QCHAT.gif](https://help.qatium.com/hc/article_attachments/23097382734225)

# Create a team workspace

Permalink: [Create a team workspace](https://help.qatium.com/hc/en-us/articles/23070623645201-Create-a-team-workspace)

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197174264977)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197174272529)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197174277393) |

Creating a team workspace allows you to share a common place with your colleagues, collaborators,  
or stakeholders to visualize the networks, run simulations, and share strategies.

You can easily create one by following these steps:

1. Go to the workspace name to display the dropdown menu ![dropdown-button.png](https://help.qatium.com/hc/article_attachments/25197207505553)
2. Select _Create workspace_
3. Enter a name for your workspace
4. Select the organization you want to create the workspace in
5. Confirm the action by clicking on _Create workspace_

_![CREATE WORKSPACE.gif](https://help.qatium.com/hc/article_attachments/23070623611921)_

And voilà! Your workspace will be created and ready to go.

At that moment, you’ll have an [Owner role](https://help.qatium.com/hc/en-us/articles/23069798983313), and you’ll be able to rename the workspace, [remove it](https://help.qatium.com/hc/en-us/articles/23090044407697-Remove-a-workspace), [add](https://help.qatium.com/hc/en-us/articles/23071017968017-Add-members-to-a-workspace) or [remove](https://help.qatium.com/hc/en-us/articles/23071483712017-Remove-members-from-the-workspace) members, [change users’ roles](https://help.qatium.com/hc/en-us/articles/23071271258385-Change-the-role-of-a-member), and [share the networks](https://help.qatium.com/hc/en-us/articles/23070099691153-Share-a-network) within your workspace with other colleagues.

If you want to **rename the workspace** you’ve created, you just have to:

1. Go to _Manage workspace_
2. Enter the new name in the text bar
3. Press enter or click on the check mark ![check-mark-icon.png](https://help.qatium.com/hc/article_attachments/25197174296081)

![CHANGE WS NAME.gif](https://help.qatium.com/hc/article_attachments/23070623615249)

When having multiple workspaces, each time you sign into Qatium, you’ll land on the last one you accessed. To **access another workspace or organization**, you simply need to:

1. Go to the workspace name
2. Select the workspace you wish to access

![access-workspace.gif](https://help.qatium.com/hc/article_attachments/25191479438993)

**Important**:  
The creator of the workspace defines roles and can change them at any time directly from the Manage Workspace button.

Users need to be registered on Qatium before you can add them to your workspace.

# Roles in workspaces

Permalink: [Roles in workspaces](https://help.qatium.com/hc/en-us/articles/23069798983313-Roles-in-workspaces)

Depending on your role, you’ll be able to do different things in Qatium workspaces. For starters, if you are a [Pro user](https://qatium.com/pricing/) and you create a workspace, **you’ll become the owner of that workspace**. From there, you’ll have an **Owner role**. If someone adds you to a workspace, you will have a Member role unless the owner changes it.

Here’s what you can do depending on your role:

|                                               |                                                                                                                                                                                                   |
| --------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                               |                                                                                             **Owner**                                                                                             | **Member**                                                                                                                                                                                        |
| Access a workspace                            | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |
| Remove workspace                              | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Rename workspace                              | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Add and remove members from a workspace       | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Change users roles                            | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Add networks to a workspace                   | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Upload readings to a network in the workspace | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| See a list of the workspace members           | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |

# Qatium for network operations

Permalink: [Qatium for network operations](https://help.qatium.com/hc/en-us/articles/23066075657105-Qatium-for-network-operations)

With Qatium, you can **test different situations and operations** and assess their performance on your network. That’s what we call **running scenarios**.

You’ll be able to make risk-free, informed decisions about your network in a virtual environment before executing plans in the physical world.

**Evaluate the impact of watermain shutdowns**

|                       |                                                                                                                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Plan availability** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25229182860945)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25229172438929)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25229172442385) |

Confirm the right valves to isolate when closing a pipe, see which customers are affected by a shutdown, and identify alternative supplies to ensure continuity of service.

Learn [how to perform Watermain shutdown](https://help.qatium.com/hc/en-us/articles/23187104077585-Watermain-shutdown) with Qatium.

**Design and adapt flushing sequences**

|                       |                                                                                                                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Plan availability** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25229182860945)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25229172438929)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25229172442385) |

In this scenario, you can design efficient flushing sequences that ensure clean water delivery, with the minimum customer disturbance. You can also adapt flushing sequences in the field if real-life conditions, like a broken hydrant or valve obstruction, don't match your model.

Learn how to [design a flushing sequence](https://help.qatium.com/hc/en-us/articles/23188759915793-Flushing) with Qatium.

**Manage tank autonomy**

With Qatium, you can monitor the autonomy of your tanks and quickly identify anomalies by setting warnings.

Check [this article](https://help.qatium.com/hc/en-us/articles/23187934088721-Tank-management) to learn more about tank management.

**Plan pressure management**

Preview the impact of new District Metered Areas (DMAs) and ensure customers keep optimal pressure by evaluating boundaries and changing your PRVs’ settings.

Learn [how to operate valves and do pressure management](https://help.qatium.com/hc/en-us/articles/23188450723857-Pressure-management) with Qatium.

The moment you test these or any other situations, you’ll be [running scenarios](https://help.qatium.com/hc/en-us/articles/23184711694993-What-s-a-scenario) in Qatium. Using the _Network versions_ ![](https://help.qatium.com/hc/article_attachments/23066218033297) panel, you can easily check the differences between the current state of your network and the scenarios you are testing.

# What’s Qatium

Permalink: [What’s Qatium](https://help.qatium.com/hc/en-us/articles/23063435951889-What-s-Qatium)

[Qatium](https://qatium.app/) is an **open and collaborative water management platform** that helps utilities improve their water distribution system operations, SCADA, smart metering deployments, and much more.

With a simple and [secure](https://qatium.com/security/) design, **Qatium allows you to build a digital replica of your networks within minutes**, streamline daily operations, and optimize your network performance.

You’ll be able to check the state of your network, quickly react to any issues, improve your network design **without modeling skills**, connect AMI or SCADA data, and test the impact of your decisions in a virtual environment.

And you won’t be alone during the process: Q, your digital water assistant, will always be available to help you out. They’ll give you information about network building, things to improve, errors, and other valuable insights to help you understand and work with Qatium better. Whenever you have a question, **just open Q’s chat and ask whatever you need**.

You can launch Q anytime both from the workspace and inside the network.

![QCHAT.gif](https://help.qatium.com/hc/article_attachments/23063451787153)

To experience Qatium for yourself:

1. [Create a free account](https://help.qatium.com/hc/en-us/articles/16164055312785)
2. Explore the [Demo network](https://help.qatium.com/hc/en-us/articles/23065292217233), or [upload your data & build your own](https://help.qatium.com/hc/en-us/articles/23064699184785)
3. Play, test, and [simulate operations](https://help.qatium.com/hc/en-us/articles/23066075657105) in your virtual environment

Learn more about how Qatium works in [this article](https://help.qatium.com/hc/en-us/articles/23063998429585).

# Glossary

Permalink: [Glossary](https://help.qatium.com/hc/en-us/articles/19560097366929-Glossary)

[A](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDDYBH3JGE46TMW1ZA1GHY0R) - [B](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWGJDYX0MPQBJYGNG7343J) - [C](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWJ2J88G05SDT14RWYXAP2) - [D](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWNG152P393G1XYN6D4MYB) - [E](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXAM09CP00DPAN6GGK6MFC) - [F](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXBWJY2WQWFJQQ65AA7Y50) - [G](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXEM6GFZW9E0CMH85C6VVM) - [H](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXHM639QMA2WQ21EGSVZFK) - [I](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK4J7XCGBF5WXWVY6DTHBFW) - [J](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK4S8MNZ9B8E9R6PVTE6PGY) - K - [L](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK4TBAQMMGMZYSSRY7PSG4A) - [M](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK4XH179VHGPKDY32J56421) - [N](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK524787JZ1N03SNXB0TXCQ) - O - [P](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK547MMKXQNR5WEB9ETWDDP) - Q - [R](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK58162KFD8EKQRYMAXRWW9) - [S](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5BZS81A43P9D3J8PYKQMT) - [T](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5WEPH2JV4MFZ8AEF3JQBG) - [U](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK6HH986V48ZZ0124S7AT04) - [V](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK61G95YAE3K2RYT0832MED) - [W](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK62Y3X9RNABZH12Q972VX2) - X - Y - [Z](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK68HNHF7ETNDEN34QPGED9)

## A

### Alternative supply

A backup supply for an area (not necessarily isolated). E.g.: If an area, during certain periods of time (peak hour, summer, etc.), doesn’t provide enough pressure, an alternative supply is opened to restore pressure.

### AMI

Advanced Metering Infrastructure (AMI) is an integrated system of water meters, communication networks, and data management systems that enables two-way communication between meter endpoints and utilities. Consumer meter readings are automatically sent to the utility system without human intervention.

### AMR

Automated Meter Reading (AMR) is the communication technology water utilities use to automatically collect water consumption and status data from water meters. AMR systems can be either walk-by or drive-by, and it requires human intervention to be collected.

### Analysis

A work mode inside Qatium that allows checking the general state of the network, with a focus on pressures and flows.

Related to _[Work modes](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK67JBFQF7VF46JYEY7XZRA)_

### Arterial

\[Pipe\] Large pipes bringing water from the source or water treatment plant to a town/city. From them, distribution pipes supply water to customers.

Related to _[Network levels](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK528Y2516PX7WD20RQ27D1)_

### Asset

Any physical element existing in the network’s infrastructure (pipe, pump, valve, tank, etc.).

### Asset ID

Name assigned to an asset when building the hydraulic model. IDs could be anything, every utility tends to have its own naming rules and templates. It is common practice to use asset initials or the default naming of specific tools in the industry (e.g. InfoWater or WaterGEMS presets).

Related to _[Asset](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWDJ4AVY12EG8SV30XE0F3)_

### Assigned demand

The volume of water assigned to a junction, customer point or hydrant to satisfy the customers needs.

## B

### Backflow

An unforeseen event that arises when the flow is reversed or mixed with other liquids, gases, or other substances in the distribution system of public water systems from any source other than its intended origin.

### Bearer token

Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called _bearer tokens_. The name “bearer authentication” can be understood as ��give access to the bearer of this token.” The bearer token is a cryptic string, usually generated by the server in response to a login request.

### Boundary valves

Valves in the network that define the limits of a DMA. Sometimes, those limits need to change in order to:

- Improve zone definition (more manageable size, more stable pressure, fewer valves needed to isolate it, …).
- When there is a malfunction in the infrastructure, you might need to open valves to similar pressure areas to maintain a stable supply for customers.

## C

### Capital improvement planning (CIP)

The planning (financing, location, timing) of capital improvement projects over several years. A capital improvement project (capital project) is typically a permanent structural change or enhancement to a property or asset. For example, a local government maintenance plan of water and wastewater infrastructure.

### Catchment

An area of land, usually surrounded by mountains or hills, over which water flows and is collected. Within a catchment, water runs by gravity to the lowest point. The water is called surface runoff if it stays on the top of the land or groundwater flow if it soaks into the ground.

### Check valve

A valve that allows fluid flow in only one direction and protects important hydraulic system components. When properly installed, a hydraulic check valve can prevent potentially contaminated fluid from mixing with the fluid of a reservoir, keep the system primed and relieve pressure.

In Qatium this is considered a pipe property.

### CSV file

A Comma Separated Values (CSV) file is a plain text file that contains a list of data. These files are often used for exchanging data between different applications. For example, databases and contact managers often support CSV files.

### Customer point

At Qatium we use this term to refer to the points supplied by the water distribution system (a building, for example). We use this data to know the number of consumers affected when making operations on the network.

Also used in Qatium as: **_customers_**

## D

### Data validation

Part of the data enhancement that Qatium performs during data import. It refers to ensuring that the layer attributes comply with the validation rules - otherwise their values are replaced by the established default values.

Related to _[GIS attribute](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXFT8TQX5Y139WP59CGQ6V)_

### Demand (water)

The volume of water requested by users to satisfy their needs. There are two main types of demand: base - which is usually your average daily demand; and unit - which can be a per capita demand based on population, count or area.

Related to _[Demand pattern](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWQV95FX88AKT4Z50YWZWS)_, _[Demand pattern zone](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWRBYYC3SZ6KSDNZH6AWG3)_, _[Demand spike](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX17VQVY56B936ZTMC7QFD)_

### Demand pattern

Average demand behavior over a given period of time. When demands are applied at junctions, they can be either “fixed” or vary over time.

Related to _[Demand](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWQABDG0EGPFC7BK82DPGZ), [Demand pattern zone](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWRBYYC3SZ6KSDNZH6AWG3)_

### Demand pattern zone

An area inside a network in which all nodes share the same demand pattern. This is defined by the user and it serves to estimate how much water is consumed in different sectors of a network, when there’s no real data from meters.

Related to _[Demand Pattern](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWQV95FX88AKT4Z50YWZWS), [Demand](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWQABDG0EGPFC7BK82DPGZ)_

### Demand spike

Qatium functionality that allows to apply different demands (usually surges in consumption) to selected junctions and see the changes in the network.

Related to _[Discoloration risk](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX2DW16QG77VR1XDPK10M2), [Scenarios](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5D8D8T14VBV9WTB17QSR1), [Demand](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWQABDG0EGPFC7BK82DPGZ)_

### Digital twin

A virtual model designed to accurately reflect a physical object. It is a virtual representation of an object or system that spans its lifecycle, is updated from real-time data, and uses simulation, machine learning and reasoning to help decision-making.

### Discoloration risk

Water turbidity is an important parameter in drinking water quality control. It may indicate microbiological contamination, which promotes the adhesion of heavy metals and pesticides. Discoloration doesn't always mean the water is unsafe, but it can reduce disinfection effectiveness and indicate issues in the distribution system. Cloudy water affects public perception of drinking water safety.  
In Qatium, we’ll warn you about discoloration risk when performing a demand spike and/or flushing scenario.

Related to _[Demand Spike](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX17VQVY56B936ZTMC7QFD)_, _[Flushing](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXD293Z6GM6KR41HVQ9GBD)_, _[Water age](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK63XJYQ7KTP5MF0327RCZ7)_

### Distribution

\[Pipe\] Located inside a building delivering potable water to the facilities. The supply system delivering water from the potable source to the building is the "water service" pipe.

Related to _[Network levels](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK528Y2516PX7WD20RQ27D1)_, _[Arterial](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWCTBAV9CDR4CT76C61XXM)_

### DMA (District metered area)

A special type of zone with identified inlets and outlets that are metered, so that it is possible to know how much water is actually being consumed inside that area.

Related to _[DMA sectorization](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX9NFARDKSB7HJRDKGT2V4)_

### DMA sectorization

The división of a network into metered sub area(s) to monitor consumption, and track Non-Revenue Water (NRW) and leakage, which allows to identify issues and solve them more quickly.

Related to _[DMA](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX8YXYKH2XFCQRYN7G54TJ)_

### .DWG file (AutoCAD)

DraWinG (DWG) is a computer drawing file format used primarily by the AutoCAD program, a product of the AutoDesk company. DWG files store drawing information in three dimensions in vector form.

It’s used in Qatium to get a synoptic view.

Related to _[Synoptic](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5V3B9GJY5D6SJZM4RS7GB)_

## E

### Emitter

Emitters are devices associated with junctions that model the flow through a nozzle or orifice that discharges to the atmosphere.

[EPANET](https://epanet22.readthedocs.io/en/latest/3_network_model.html#:~:text=quality%20source%20points.-,Emitters,-Emitters%20are%20devices) treats emitters as a property of a junction and not as a separate network component.

Related to _[GIS fields](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXGCQC1NNH9B8JKAEN61NY)_

### Element

All the objects presented in the network: assets (such as pipes, tanks, valves,…), junctions, zones, etc.

### EPANET

Water distribution system modeling software developed by the United States Environmental Protection Agency (EPA) Water Supply and Water Resources Division.

## F

### Fire flow

Fire flow is defined as the flow rate of a water supply that is available for the responding fire department for manual firefighting. Typically this is water that is available at the surrounding fire hydrants, but it can be supplied with another approved source such as a static water supply like a tank or pond, or even using a fire department tanker shuttle service.

Related to [_Tank_](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5WGRFNKYJN0A0AKZ5XZGZ), [_Supply source_](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK9CH0GKJ8XJ98STMZMKY1A)

### Flow

The volume or quantity of water that circulates inside a pipe in a specific time interval.

### Flow control valve (FCV)

A type of hydraulic valve consisting of a needle valve and a check valve placed in close proximity in a common body. Commonly used to regulate the flow or pressure of a fluid. They normally respond to signals generated by independent devices such as flow meters or pressure gauges.

Related to _[Check valve](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWJJDN71MX3ENV60KPV9Z0), [Flow meter](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXCKJQ5FXH8VM1HD51X6E7), [Pressure gauge](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK551AVRMF4Z10MZC8F66WE)_

### Flowmeter

Flowmeters are instruments that monitor, measure or record the flow rate, volume or mass of a gas or liquid. Flowmeters provide accurate monitoring and/or control of what moves through a pipe or pipeline, including water, air, steam, oil, gases and other liquids.

### Flow sensor

Flow sensors are part of flowmeters and interact with the flow, generating raw signals. These signals are then processed by additional devices (loggers) inside the flowmeter and converted into usable flow measurements.  
The term is often used interchangeably with flowmeter within the water industry.

### Flushing

To improve water quality by removing sediment that slowly builds up at the bottom of the watermain over time or purge stagnant water in the network.

Inside Qatium, it’s a functionality that allows to see different insights in a flushing scenario or to identify issues in the network.

Related to: _[Unidirectional Flushing (UDF)](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK601G7CDVKHBP2R18TPP3F)_, _[Discoloration risk](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX2DW16QG77VR1XDPK10M2)_, _[Water age](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK63XJYQ7KTP5MF0327RCZ7)_, _[Scenarios](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5D8D8T14VBV9WTB17QSR1)_

## G

### GeoJSON

GeoJSON is an easy-to-use GIS file format. It supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, and MultiPolygon. Geometric objects with additional properties are Feature objects. Sets of features are contained by FeatureCollection objects.

### GIS

Geographical information system (GIS): a computer system for capturing, storing, checking, and displaying data related to positions on Earth's surface.

### GIS attribute

Nonspatial information about a geographic feature in a GIS, is usually stored in a table and linked to the feature by a unique identifier.

Related to _[GIS](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXFR1Z59Z0K84NNCN27WSB)_

### GIS field

\[Qatium\] In a GIS file, fields are the titles in the columns. During the import of network data, Qatium processes this information according to standard [specifications](https://help.qatium.com/hc/en-us/articles/18705974271377-GIS-files#h_01HASSBYZQR1W8B70PB8DSN6ZC), and displays these fields as properties in the asset information.

![](https://help.qatium.com/hc/article_attachments/20314376689297)

Related to _[GIS](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXFR1Z59Z0K84NNCN27WSB)_

## H

### Headloss

Reduction in head, or pressure, of the flow due to friction, turbulence or other factors. It depends on the flow velocity, the pipe diameter, the pipe length and a friction factor based on the roughness and Reynolds number of the flow.

### Hydrant

A vertical pipe, usually at the side of the road, that is connected to the main water system of a town and can supply water, especially for dealing with fires: a fire hydrant.

### Hydraulic head

It represents the mechanical energy per unit weight of the fluid in the system. Knowledge of the hydraulic head distribution in an area allows one to estimate the direction and rate of flow.

Related to [_Supply source_](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK9CH0GKJ8XJ98STMZMKY1A)

### Hydraulic model

A collection of mathematical equations that give a simple representation of reality. They estimate: flow, water level and velocity in river channels, pipe networks, tidal systems, or floodplains. Hydraulic models are used to study and analyze the water system behavior now and/or in the near future.

## I

### .inp file

EPANET input file: the native format for EPANET.

Related to _[EPANET](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXAT6KB9Y9K27KZMPQGEFE)_

### InfoWater Pro

Engineers use Autodesk InfoWater® Pro software to model water distribution systems in an easy-to-use GIS interface.

Related to _[GIS](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXFR1Z59Z0K84NNCN27WSB)_, _[Hydraulic model](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK4H3EZ0CX948YXMKQVTHDK)_

### Ingest API

A REST API that offers two interaction patterns compatible with each other: bulk and streaming.

- The streaming pattern accepts incremental updates to a dataset as those changes are captured.
- The bulk pattern accepts CSV files in cases where data syncs occur periodically.

Qatium’s ingest API allows the loading of external data to a network for its subsequent visualization and status tracking.

### Inlet Outlet (asset)

An asset that allows water to flow into and out of the network (e.g. inlet/outlet pipes) or controls the rate at which water flows along and out of it (e.g. inlet/outlet valves). This can refer to any part of the network: zones, DMAs or enclosed systems (tanks, etc.).

### Insights & results

Key information that helps solve a problem or improve the state of the network. It can be visualized just by accessing the platform (e.g. water balance, pressures, etc.), or when running scenarios, directly on the main screen as soon as the model has finished running the simulation.

Related to _[Scenarios](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5D8D8T14VBV9WTB17QSR1)_

### Internet of water

Implementation of technologies based on the Internet of Things (loT) that allow sending and receiving information, linking some of the elements that make up the systems within the water system, and that are connected to the internet, which facilitates interaction with them and the link with autonomous systems or with artificial intelligence.

## J

### Junction

Points where links (pipes, valves or pumps) join together and where water enters or leaves the network. It is a component that you cannot find in physical networks, but junctions are needed to solve the mathematical graph model of system flows.

## L

### Labeling

In ArcGIS Pro, it refers specifically to the process of automatically generating and placing descriptive text for features in maps and scenes. A label is a piece of text on the map that is dynamically placed and whose text string is derived from one or more feature attributes.

Related to _[GIS](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXFR1Z59Z0K84NNCN27WSB)_

### Lateral (pipe)

A pipe that connects the interior installation of the building and the corresponding shut-off valve to the distribution network.

Related to _[Shut-off valve](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5J3904PC3Z3DHD8E5WTC5), [Main](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK4XKHE8CXCP9H5YH38HAG4)_

### Loop pipes

A pipe that ends where it starts. Pipeline looping is the practice of designing pipelines with segments run in parallel. This practice increases the pipeline flow capacity without altering the final pressure.

## M

### Main (pipe)

Arterial and distribution pipes without laterals defined in the model.

Related to _[Arterial](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWCTBAV9CDR4CT76C61XXM), [Distribution](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX7PFQAM7M09CRR3E1YRJE), [Lateral](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK4V7G6XPDDHCNJTV6S0WQB)_

### Main conditioning

The process of gradually increasing the flow in a pipe to clean its walls while measuring water quality. This is done at stages:

1. The water quality needs to settle first before increasing the flow again.
2. The watermain is then "conditioned" to run at that higher flow rate, so that, if it's needed for alternative purposes, it can be used immediately without the risk of dirty water.

Related to _[Water age](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK63XJYQ7KTP5MF0327RCZ7)_

### Model accuracy

A percentage indicator calculated every hour from the various deviation values of the model. The lower the deviation value, the more accurate the model.

Related to _[Model deviation](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK50B4FSH1ZMAHBZFXMDGQ2)_

### Model deviation

The model deviation indicates the average difference between the sensor value and the model value assigned to the same asset. The smaller the model deviation, the closer the real data and the simulated values will be.

Related to _[Model accuracy](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK4ZSPP45Y1MBZ0T85PSCJ9)_

### Model projection

The spatial location of the hydraulic model that generates the map view in Qatium. The user must establish this location through a coordinate system.

### MultiPolygon or Polygon geometry or shape

\[GIS\] Closed shapes that represent areas on a map, ranging from natural features (lakes, forests, etc.), to man-made structures or areas (cities, districts, and property plots).

They are 1 of the 3 types of layers that can be imported in Qatium (as Shapefiles or GeoJSONs), and are categorized as “zones”.

## N

### Net flow

\[Qatium\] It represents all the water consumed in a zone including customer demand and leakage. Net flow is calculated as the sum of all the inflows in a zone minus all the outflows.

Related to _[Water balance](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK64TCSZVSNNWY4M6FHDA6H), [NRW](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK534B7VEH2H62WSGDJT5MB), [Readings](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK585QZV626PR554F07FZ5P)_

### Network levels

Water supply networks can be divided into three levels:

1\. **Transmission line**: large pipes or channels transporting raw water from the source to the water supply treatment plant.

2\. **Arterial**: the largest pipes transporting water from the treatment plant to major areas.

3\. **Distribution**: the remaining network providing water to consumers.

Qatium categorizes all assets in the network as arterial or distribution.

Related to _[Arterial](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWCTBAV9CDR4CT76C61XXM), [Distribution](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX7PFQAM7M09CRR3E1YRJE)_

### Node

Location within the water supply system where head, inflow, or outflow is known, and actions or measurements occur. A node can be used to represent things that actually happen over a large physical area but that, for modeling purposes, occur at a single point.

In Qatium, this can be a supply source, tank, pump, valve or junction.

### NRW (non-revenue water)

The difference between the volume of water injected into the network and the volume that is finally billed. Water that has been produced and is "lost" before reaching the customer due to:

– Unbilled authorized consumption (firefighting, celebrations, etc.)

– Apparent losses (water theft, metering inaccuracies…)

– Real losses (from transmission/distribution mains or storage facilities)

Related to _[Water balance](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK64TCSZVSNNWY4M6FHDA6H), [Water efficiency](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK6617MJ9SCWCWWXZJRG8ZQ)_

## O

### Orientation

An element’s position/direction regarding other elements of the network. More specifically, the orientation depends on another upstream element.

In Qatium, orientation can be inferred or defined by the user during import.

Orientable elements: all assets/elements for which orientation is important for a valid simulation, e.g. PRVs, pumps

Related to _[Upstream Downstream](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK61051F9XBFH7NCQWKVSAD)_

### Owner Member (role)

\[Qatium\] Roles inside the App.

**Owner**: the creator of the workspace and can manage it, create or upload networks, add members, change their roles or delete them.

**Member**: can access the workspace, create or upload networks, and work with all existing networks within the workspace.

## P

### Pressure

It is the capacity of a fluid to store energy and it measures the capacity of water to reach a certain height when it circulates through a pipe.

\[Qatium\] It refers to the pressure value for a given junction according to the simulation results (the one shown in the tooltips and pressure hexagons).

### Pressure gauge / Manómetro

A pressure gauge is tool used to measure the pressure to ensure there are no leaks or pressure changes that would affect the performance of the system.

Related to _[Pressure](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK54A91FNPYAHCTB4TY8JJA)_

### Pressure reducing valve (PRV)

Used to reduce incoming water pressure to a safer constant predetermined downstream level. Depending on the type of valve, the downstream pressure is established by a pressure adjustment setting on the valve or by an external sensor.

Related to _[Pressure](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK54A91FNPYAHCTB4TY8JJA)_, _[Regulating valves](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK59GZBM9V7Y6XSGMWWX2Z0)_

### Pressure sustaining valve (PSV)

Used to maintain pressure by opening only as much as necessary to maintain the required pressure on its inlet port.

Related to _[Pressure](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK54A91FNPYAHCTB4TY8JJA)_, _[Regulating valves](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK59GZBM9V7Y6XSGMWWX2Z0)_

## R

### Readings

The actual data received from telemetry systems that we incorporate into Qatium. It could be flow from a flow meter, level or pressure from a pressure sensor or the status of an asset (on, off, active, etc.).

Related to _[Telemetry](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5WKFYD9XG0DGFH3J3CQMK), [Flow meter](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXCKJQ5FXH8VM1HD51X6E7)_

### Regulating valves

Used to adjust and control the flow rate through a pipe. They provide more precise control and allow the flow rate to be adjusted to different levels, making them ideal for situations where precise regulation is required.

\[Qatium\] PRV (Pressure Reducing Valve), PSV (Pressure Sustaining Valve), FCV (Flow Control Valve), PBV (Pressure Breaker Valve)

### Rezoning

Adjusting the boundaries of network zones. This is usually done to reach a minimum pressure in the network, and it could be part of a planning project or as a response to an emergency or unplanned event.

Related to _[Zone](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK68KPQ59K4CR2D320PEHYH)_

### Roughness

The resistance to water flow due to the walls’ state of channels and pipes, the sides or the bottom of a channel.

Related to _[Roughness coefficient](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5B5CC4BGNFGVHRQD6YMAX)_

### Roughness coefficient

A number that describes how smooth or rough a pipe's surface is. This coefficient is used by engineers (or software) to determine friction losses of fluids moving through the pipe. There are multiple equations used to define and simulate roughness (H-W: Hazen-Williams, C-W: Chezy-Manning, D-W: Darcy-Weisbach).

Related to _[Roughness](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5AGMTRKCFQTEN4YN4AFVE)_

## S

### SCADA

Supervisory Control and Data Acquisition (SCADA) systems are widely used in the water industry to monitor and control critical network infrastructure such as pumping stations, storage tanks and valves.

### Scenario

\[Qatium\] Changes users make in the network to answer “What if…?” questions. These scenarios create different network versions to test the changes applied. Scenarios can be used for network operations and performance, as well as for planning.

### Sensor

A mechanism or tool integrated into a meter that gathers information — water levels, air temperature, etc. — about its environment and transmits it to the cloud via a mobile network.  
In Qatium, we refer to sensors as IoT devices that measure a specific critical parameter in the network.

Related to _[Readings](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK585QZV626PR554F07FZ5P), [Sensor data](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5EEEBJH07914RKK18F1AS), [Flow sensor](https://help.qatium.com/hc/en-us/articles/19560097366929-Glossary#h_01HDJXBWJY2WQWFJQQ65AA7Y50:~:text=and%20other%20liquids.-,Flow%20sensor,-Flow%20sensors%20are)_

### Sensor data

A generic term that refers to any data collected by sensors and telemetry systems . It's also called live data, real-time data or near real-time data.  
In general, live data comes from SCADA systems (the utilities telemetry system) and IoT devices (third-party sensors attached to the network).

Related to _[Sensor](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5DVTX2GHE86J9MV1JFY6W), [Readings](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK585QZV626PR554F07FZ5P)_

### Service level

Minimum required pressure at every customer point in a network, as stipulated by utilities' contractual duties.

### Shapefile

A digital vector storage format for storing geographic location and associated attribute information.

### Shutdown

\[Qatium\] Scenario that allows you to see which valves need to operate in order to isolate the selected pipe, as well as the pipes that are impacted by the operation.

_E.g.: When a pipe needs to be worked on – e.g. to fix a leak – operators will isolate the pipe by locating valves that surround it and close them, trying to minimize the impact (water quality, pressure, supply interruptions and duration) on customers._

Related to _[Scenarios](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5D8D8T14VBV9WTB17QSR1)_

### Shut-off valve

Used to regulate the flow through pipes, allowing complete interruption of the water supply when necessary, or adjustment of the flow rate. They are usually installed in strategic locations to isolate specific parts of a network, allowing repairs or replacements without the need to shut off the entire water supply.

\[Qatium\] TCV (Throttle Control Valve)

### Signal mapping

Associate sensor readings to the correspondent asset and asset property.

Related to [Readings and live data](https://help.qatium.com/hc/en-us/articles/23508344352785-Add-signal-mappings)

### Smart metering deployments

Consists of the installation of smart water meters. These have a real-time visual reading and are connected to a network so that they can also send the data to the manager immediately.

### Smart water

The inclusion of advanced technologies to achieve automation of processes within the integral water cycle and data analysis to achieve improvements in water services.

### Status (asset)

The working state of certain elements (pipes, valves, pumps). Its value can vary depending on the asset and the situation, and it is always shown in the asset information when clicking or hovering over an icon.

### Supply source

\[Qatium\] External sources of water in the network such as tanks or reservoirs, lakes, rivers, groundwater aquifers, etc.

\[EPANET\] “Reservoir”. Nodes that represent an infinite external source or sink of water to the network. Reservoirs can also serve as water quality source points.

Related to _[Tank](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5WGRFNKYJN0A0AKZ5XZGZ)_, _[Hydraulic head](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK4GZPQCAS39NHBGRX88NSE)_

### SWMM (Storm Water Management Model)

Created by EPA, it’s the most used simulation model for planning, analysis, and design related to stormwater runoff, combined and sanitary sewers, and other drainage systems.

### Synoptic

\[Qatium\] A work mode with a high-level representation of your network. It represents only the major assets, their performance, and interconnections, reducing the noise and providing a simplified view particularly useful in large networks.

Related to _[Work modes](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK67JBFQF7VF46JYEY7XZRA)_

## T

### Tank

Tanks are nodes with storage capacity, where the volume of stored water can vary with time during a simulation.

### Telemetry

The automatic measurement and wireless transmission of data from remote sources, through the use of sensors.

Related to _[Readings](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK585QZV626PR554F07FZ5P)_

### Threshold

Minimum and/or maximum values that can be assigned to an asset during import to receive warnings. When the readings or the simulation exceed the defined threshold values, a warning appears in the App interface, and more information inside the asset details.

Related to _[Warnings](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK630KPCHMTZJC149ECDJMG), [Readings](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK585QZV626PR554F07FZ5P), [Asset](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWDJ4AVY12EG8SV30XE0F3)_

### Time-step

The basic time unit in a model simulation. Qatium creates a 24h model starting at 00:00, with a 1h time-step.

### Timeline

The graphical representation inside Qatium of a 24-hour period when opening a network, it shows the current moment represented in the model. It is used to see how the network is operating at a certain time or to review historical live data and see past events (e.g. bursts or pipe closures).

### Token

A unique identifier used to authenticate a user or application to access an API and must be included in every API request to authorize access to protected resources.

Related to _[Ingest API](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK4NKBQY4CR610PRK3F34ZR)_, _[Bearer token](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJWH5EZ824PCNEVHC8MXHMQ)_

## U

### Unidirectional flushing

Another flushing method consists of closing valves and opening hydrant(s) in a sequential manner in a particular section or loop, always starting from a clean water source (storage tank, pump station, previously flushed pipe sections…).

Related to _[Flushing](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXD293Z6GM6KR41HVQ9GBD)_

### Upstream Downstream

It is used to specify the location of an asset in reference to another asset (e.g.: the tank is downstream of that valve). It can also be used for several assets or areas (e.g.: all the pumps downstream of that area are problematic).

## V

### Velocity (optimal - non-optimal)

Pipes velocity within a specific range will be considered optimal for flushing. In Qatium, these pipes will be shown in green color and the panel for flushing will indicate whether there are pipes with optimal velocity or not. The current range for optimal velocities is 1.5 m/s - 3 m/s, and anything outside that range is considered non-optimal velocity.

Related to _[Flushing](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJXD293Z6GM6KR41HVQ9GBD)_, _[Demand Spike](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX17VQVY56B936ZTMC7QFD)_, _[Scenarios](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5D8D8T14VBV9WTB17QSR1)_

### Volume

The space occupied by a fluid. Unlike gasses, the volume of a given amount of liquid hardly changes when it moves. In a hydraulic network, the amount of water supplied in a given time is measured by its volume. The usual unit is the cubic meter (m3) for large quantities, or the liter for smaller quantities.

## W

### Warnings

Whenever there is a problem with an asset in the network, Qatium will display alerts to let the users know what is happening. For example, a warning may alert the user when an asset value exceeds the established threshold.

Related to _[Thresholds](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK5X3S5JMHDDF583B7TKN5D)_

### Water 4.0

It considers the use of tools within the integral water cycle, such as artificial intelligence, autonomic learning, robotics, Big data, automation, 5G, augmented reality, and new technologies, related to the fourth industrial revolution.

### Water age

\[Water quality modeling\] The time it takes for water to move through a given system or reach a specific point of interest within the system. It is a critical parameter because it helps determine the residence time of water and the extent to which it can be exposed to different pollutants or contaminants. Water age is a general indicator of water quality, with lower water age indicating better water quality.

### Water balance

Improving water balance in the network focuses on reducing non-revenue water (NRW). This includes checking each DMA, assessing if there is a peak compared to the usual NRW values, checking the minimum night flow (MNF), and trying to address the issues found keeping the pressure values present at all times.

Related to _[NRW](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK534B7VEH2H62WSGDJT5MB)_, _[DMA](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX8YXYKH2XFCQRYN7G54TJ)_

### Water efficiency

\[Qatium\] The percentage of water that actually gets to customers in a delimited zone where there can be problems with non-revenue water (NRW).

Related to _[Water balance](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK64TCSZVSNNWY4M6FHDA6H)_, _[NRW](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK534B7VEH2H62WSGDJT5MB)_

### WaterGEMS

A hydraulic modeling application that allows the analysis, design, and optimization of water distribution systems.

### Water management model

A generic term that includes water resource management, stormwater management, water supply management, etc. It can be defined as a model - nowadays usually digital - that aims to replicate the behavior of the water in the environment (urban or rural), when water is going through pipes, catchments, etc.

### Water supply (system)

The system and processes associated with the provision of water to end users. This includes the collection, treatment, distribution and storage of water. Water supply may come directly from the source of supply or through intermediate storage systems such as tanks or reservoirs.

### Work modes

A panel inside the network that allows the user to focus on concrete tasks (e.g. perform a shutdown, flushing, etc.) or on the assets with warnings. Each work mode is a preset especially designed to help the user perform operations in the network easily and quickly.

### Workspace

The digital space inside Qatium where the user has their networks to work on. It could be a personal workspace (My networks), or a shared one (any workspace created to have several members working together in the same network).

## Z

### Zone

An area of the network that makes sense to differentiate from other areas from an operational perspective. They may be used to identify district-metered areas, pressure-metered areas, areas with different timetables for water supply, or any other meaningful purpose.

Related to _[DMA](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX8YXYKH2XFCQRYN7G54TJ)_, _[DMA sectorization](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDJX9NFARDKSB7HJRDKGT2V4)_

# What is an Ingest API?

Permalink: [What is an Ingest API?](https://help.qatium.com/hc/en-us/articles/17260093351697-What-is-an-Ingest-API)

An Ingest API is an interface that **allows data to be imported into a system for processing or storage**. It facilitates the seamless transfer of data between applications or services. Ingest APIs are commonly used in data management and analytics systems to efficiently bring in and manage data from various sources.

Qatium's Ingest API is a REST API that allows you to **send sensor data to Qatium**. This way, you are completely in control: you decide the volume, type or frequency of data you want to send.

You’ll be able to upload sensor data to your model such as asset status, settings, flow, pressure, demand and tank level variables.

In the [Qatium API Documentation](https://docs.ingest.api.qatium.app/) you can find an **interactive Swagger to ease the API integration** and test your API requests.

# Are flow animations based on the model simulations?

Permalink: [Are flow animations based on the model simulations?](https://help.qatium.com/hc/en-us/articles/16869349301649-Are-flow-animations-based-on-the-model-simulations)

Flow visualizations (animations) are based on the **flow direction** and **pipe diameter**.

The magnitude and velocity of the flow values are calculated through the simulation with all the data available.

The Flow panel shows the distribution of the flow across the network, as well as the total length of the pipes with a specific flow range.

# What is the demand pattern applied to my model?

Permalink: [What is the demand pattern applied to my model?](https://help.qatium.com/hc/en-us/articles/16868576060177-What-is-the-demand-pattern-applied-to-my-model)

If the model is a steady-state model, Qatium assigns the **same hourly demand for the 24-time steps.**

If you're importing **GIS data, we are using a default pattern**.

Learn more about it in [this section](https://help.qatium.com/hc/en-us/articles/23156554634513).

# Why use Qatium?

Permalink: [Why use Qatium?](https://help.qatium.com/hc/en-us/articles/16867635362065-Why-use-Qatium)

Water operators, engineers and managers use Qatium to **optimize their water systems** to meet the challenges of climate change, population growth and aging infrastructure.

With Qatium, water professionals can better **understand network behavior, optimize system performance, and ensure service level** continuity and resilience by proactively protecting assets and communities.

All types of water professionals from around the world use Qatium: mainly water **operators**, leak **technicians**, field **engineers**, **modelers** - whether in water authorities or consultancies - and **managers**.

# Sign up

Permalink: [Sign up](https://help.qatium.com/hc/en-us/articles/16164055312785-Sign-up)

To sign up:

1. Go to [https://qatium.com/](https://qatium.com/)
2. Select _Create Account_
3. Press _Start_, enter your email address and click _Continue_
4. We'll send you a one-time code: use it to confirm your login

You’ll get a form asking for your name and company, once you submit that, you’ll be in!

**Important**:  
Check your spam folder or enter an alternative email if you can’t see the one-time code. If you are still experiencing issues, please [get in touch with Q](https://help.qatium.com/hc/requests/new?ticket_form_id=16143842484369).

# Learn how to create scenarios in Qatium

Permalink: [Learn how to create scenarios in Qatium](https://help.qatium.com/hc/en-us/articles/25470498417809-Learn-how-to-create-scenarios-in-Qatium)

With Qatium, you can **test different situations and operations** before implementing them in the real world. That’s what we call **running scenarios**.

You can, among many other things, evaluate the impact of watermain shutdowns, design and adapt flushing sequences, and test as many theories as you need in a **risk-free digital environment**.

Depending on your plan (Free, Pro, Business, Enterprise), you’ll get access to different tools.

These are the main controls for running scenarios in Qatium:

- **[Work modes](https://help.qatium.com/hc/en-us/articles/23184926672529):** so you can focus on specific tasks.
- [**Network versions**](https://help.qatium.com/hc/en-us/articles/23185286963601): to quickly check the difference between your real network and its scenario version.
- **Demand spike**: to apply different demands on nodes and hydrants.
- **Shutdown**: to test supply interruptions in the network.
- **Flushing**: to design flushing sequences.
- **Timeline**: to check changes over a specific period of time.

Use these tools separately or along with others to go as far as you want. For example, using the _Demand spike_ ![demand-spike-button.svg](https://help.qatium.com/hc/article_attachments/25974233315601) panel alongside the _Flushing_ ![flushing-panel-button.svg](https://help.qatium.com/hc/article_attachments/25974245715985) panel to determine whether changes in demand condition the velocities for flushing.

You can also see how these scenarios affect your network [**pressures**](https://help.qatium.com/hc/en-us/articles/23185903753233-Visualize-insights-results#h_01HRETTYS3TQ1Z7S4Q359YVE4B), **[flow](https://help.qatium.com/hc/en-us/articles/23185903753233-Visualize-insights-results#h_01HRETZRFWQ9ZHBDDTKVN60Q0N),** and [**tank autonomy**](https://help.qatium.com/hc/en-us/articles/23185903753233-Visualize-insights-results#h_01HREV30NGDA6E4BF2C7XBN4TA).

Dive deeper into Qatium scenarios by visiting [these articles](https://help.qatium.com/hc/en-us/categories/23184481749777-Running-scenarios).

[What's next? ➡️  
Upload your network to Qatium](https://help.qatium.com/hc/en-us/articles/25470663820305)

# Edit element properties

Permalink: [Edit element properties](https://help.qatium.com/hc/en-us/articles/23513322177041-Edit-element-properties)

You only need a pipe layer to create a new network, but adding as many element types as you can will help you get the most out of Qatium.  
Although Qatium tries to fill all the gaps, we also recommend that you specify the properties of your elements, providing as much information as possible.  
Below, you can find a general overview of how this works.

For more details and element-specific information, visit [this category](https://help.qatium.com/hc/en-us/categories/23123485977745-Editing-network-elements).

## How to edit properties

### EPANET

You can specify element properties in your .inp file in 2 ways:

- Using the **EPANET software** (recommended): select an element and launch the property editor. Then edit the value for each property.

![Editing element properties .INP.png](https://help.qatium.com/hc/article_attachments/23513456867729)

More details about EPANET specifications [here](https://epanet22.readthedocs.io/en/latest/index.html).

- Using a **text editor** (e.g. Notepad) to open the file and make the necessary edits.

![Text editor INP.png](https://help.qatium.com/hc/article_attachments/23513501765137)

### GIS editor

Similarly, if your network includes GIS files, you can specify element properties in the following 2 ways:

- Using a GIS editor (e.g. QGIS) – recommended: select an element layer and open the attributes table.

For example, in the attributes table below, you can edit the fields (ID, status, group etc.) as well as the attributes in each field to better specify your elements. This includes removing or adding new ones and using an [accepted alias](https://help.qatium.com/hc/en-us/sections/23182803059729-Additional-resources).

![Editing element properties GIS.png](https://help.qatium.com/hc/article_attachments/23513586317073)

- Using a code or text editor to open the file and make the necessary edits

![Text editor GIS.png](https://help.qatium.com/hc/article_attachments/23513659287313)

## How Qatium processes properties

Right after every import, Qatium carries out a series of checks on your data, to make sure they’re as accurate and coherent as possible.  
Learn more about how this works in [this article](https://help.qatium.com/hc/en-us/articles/23063998429585-How-Qatium-works).

Some properties are common to all elements (type, ID, life cycle), while others are element-specific. In all cases, Qatium respects the information you include, filling in as many gaps as possible. Then, you’ll be able to see that information inside the element tooltips and popovers and gain valuable insights for your operations.  
Here’s an example:  
You can provide material and installation date for pipes in your GIS files.  
As long as the format is the accepted one, Qatium reads and then displays these values in the tooltips and popovers of each pipe.

![ELEMENT PROPERTIES.png](https://help.qatium.com/hc/article_attachments/23513856404497)

Now, if you don't provide a value or if the format is not correct, it simply won’t be displayed.

![ELEMENT PROPERTIES_NO DATA.png](https://help.qatium.com/hc/article_attachments/23513856416529)

Similarly, you can also specify, for example, the length of the pipes. Qatium will validate and then display it in the pipe information panels.  
However, in this case, if you don’t provide a value or if the format is not correct, Qatium will infer a default value and display that one instead.  
Learn more about how Qatium processes your data in [this category](https://help.qatium.com/hc/en-us/categories/23123485977745-Editing-network-elements).

# Sensors

Permalink: [Sensors](https://help.qatium.com/hc/en-us/articles/23508543801745-Sensors)

Sensor icons appear on your map either in blue or gray, depending on the data available for the current hour.

- **Blue**![sensor-readings-icon.png](https://help.qatium.com/hc/article_attachments/25197870855313): if the received data matches the time step you are in  
  (_E.g.: reading was taken at 11 am and you visit the platform or navigate through the timeline around that hour_)
- **Gray**![sensor-no-readings-icon.png](https://help.qatium.com/hc/article_attachments/25197866621841): when there’s no data for the current time step but it is for a previous or a future one  
  (_E.g.: reading was taken at 11 am and you visit the platform or navigate through the timeline at 3 pm_)

Hovering over or clicking on the asset with a sensor icon, you’ll see:

- The **value of the sensor reading** displayed next to the simulation value
- The **date and time** when the reading was taken

Qatium will display these values only when there are readings available at the current or past time. In the image below can see an example for readings available only from 12:45 pm to 19:45 pm.

![Sensor insights.png](https://help.qatium.com/hc/article_attachments/23508533835537)

# Network owner options

Permalink: [Network owner options](https://help.qatium.com/hc/en-us/articles/23508207518609-Network-owner-options)

Whenever you upload a network to a workspace, you become the owner of that network. In other words, you are granted the [Owner role](https://help.qatium.com/hc/en-us/articles/23069891400977-Roles-in-networks) in Qatium.

There are a few management actions that you can only perform as a network Owner, as you can see below in this article:

- [Rename your network](https://help.qatium.com/hc/en-us/articles/23508207518609#h_01HSG34RAAYBVKN14BFNHT8C0D)
- [Delete your network](https://help.qatium.com/hc/en-us/articles/23508207518609#h_01HSG3B506N1A60F7DRWQXQW11)
- [Download your network](https://help.qatium.com/hc/en-us/articles/23508207518609#h_01HSG3NNVJHVYS3GN0GA66M77P)

There are also actions specific to collaboration. To learn more about them, click on the links below:

- [Share your network](https://help.qatium.com/hc/en-us/articles/23070099691153-Share-a-network)
- [Duplicate your network](https://help.qatium.com/hc/en-us/articles/23070367405969-Duplicate-a-network)

Finally, when it comes to improving a network, 3 more actions are reserved for Owners only.

The links below will take you to the corresponding articles:

- [Update your network](https://help.qatium.com/hc/en-us/articles/23512027218321-Update-your-network)
- [Add network readings](https://help.qatium.com/hc/en-us/articles/23510154807185-Add-network-readings)
- [Upload background layers](https://help.qatium.com/hc/en-us/articles/23509867325329-Upload-background-layers)

## Rename your network

You have 2 options to change the name of your network if you need to:

- From the workspace

![RENAME NETWORK.gif](https://help.qatium.com/hc/article_attachments/23508495437201)

- While inside the network

![RENAME NETWORK_2.gif](https://help.qatium.com/hc/article_attachments/23508469276177)

## Delete your network

If you need to delete a network, here’s how:

1. Click on the trash can ![delete-button.png](https://help.qatium.com/hc/article_attachments/25197593501201) icon
2. Confirm that you want to delete your network

![DELETE NETWORK.gif](https://help.qatium.com/hc/article_attachments/23508623072273)

**Important**:  
Please note that you can’t reverse this action. If you remove a network you won’t be able to recover it or the data associated with it.  
Learn more in [this article](https://help.qatium.com/hc/en-us/articles/23488960189457-What-happens-to-my-network-after-I-ve-deleted-it-Can-I-recover-my-data).

## Download your network

You can download your network as an .inp file by clicking on the cloud ![download-network-button.png](https://help.qatium.com/hc/article_attachments/25197605958801) icon.

![DOWNLOAD NETWORK.gif](https://help.qatium.com/hc/article_attachments/23508798922897)

# Add live data to Qatium

Permalink: [Add live data to Qatium](https://help.qatium.com/hc/en-us/articles/23507595356817-Add-live-data-to-Qatium)

Qatium's Ingest API is a REST API that allows you to **send live data to Qatium**, whether SCADA, AMI etc. This way, you’re completely in control: you decide the volume, type or frequency of data you want to send.

You’ll be able to upload sensor data to your model such as asset status, settings, flow, pressure, demand and tank level variables. Check all the supported metrics in the [Qatium API Documentation](https://docs.ingest.api.qatium.app/?_gl=1*labumb*_ga*MTg2MDE2ODU0My4xNjkwMTkxNDg1*_ga_7EP3SKY3L0*MTcxMjkwNzY3MS4yOTQuMS4xNzEyOTA4MjYxLjU1LjAuMA..).

Using part of this information as an input to the model will increase its accuracy, which will come in handy when you run scenarios.

We created a technical documentation for API gurus and technical experts where you can find details about the formats and endpoints of our Ingest API, as well as an interactive Swagger to test your API requests.

Make sure to request your token before **making requests to the API**. Here’s how:

1. Open the assistant
2. Click on _Request an API token_
3. Click on _Submit_

![](https://help.qatium.com/hc/article_attachments/23507611124113)

You can also map your sensor feeds to your assets. Learn how in [this article](https://help.qatium.com/hc/en-us/articles/23508344352785).

# How are upstream and downstream pressures calculated?

Permalink: [How are upstream and downstream pressures calculated?](https://help.qatium.com/hc/en-us/articles/23491029026833-How-are-upstream-and-downstream-pressures-calculated)

Upstream and downstream pressures are calculated during the **simulation** depending on the orientation of the surrounding network elements. Qatium uses the **EPANET engine** to solve physics equations about the movement of water in pressurized water networks

# Timeline controls

Permalink: [Timeline controls](https://help.qatium.com/hc/en-us/articles/23478267340561-Timeline-controls)

Below the map, there’s a timeline. It represents a 24-hour period with a 1h time step. Use it to visualize how your network performs or to review historical data and past events.

![Timeline controls.png](https://help.qatium.com/hc/article_attachments/23478479484177)

The following table shows the timeline controls and their use:

|                                                                                                             |                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Timeline control**                                                                                        | **Use**                                                                                                                                                  |
| ![timeline-pointer-icon.png](https://help.qatium.com/hc/article_attachments/25195919449873)Timeline pointer | Drag the pointer to move freely across the timeline. You can also **click directly on the timeline** and the pointer will move to the desired time step. |
| ![play-button.png](https://help.qatium.com/hc/article_attachments/25195919454609)Play button                | The pointer moves forward in real-time speed.                                                                                                            |

This will display all the simulation results after the current time step.|
|![fast-forward-button.png](https://help.qatium.com/hc/article_attachments/25195889840657)Fast-forward button|The pointer moves forward 1 hour at a time|
|![chevron-left-button.png](https://help.qatium.com/hc/article_attachments/25195889844241) ![chevron-right-button.png](https://help.qatium.com/hc/article_attachments/25195919468305)Single arrow button|Takes you to a day before or after the current day, at the same hour|
|![date-picker.png](https://help.qatium.com/hc/article_attachments/25195889860753)Date picker|Opens up a calendar, allowing you to select **a specific date.**|
|![date-picker-warnings.png](https://help.qatium.com/hc/article_attachments/25195919481617)Date picker with warning icon|If your network has [warning(s)](https://help.qatium.com/hc/en-us/articles/23508980014481-Warnings), the date picker will appear with a warning icon.

Opening up the calendar allows you to see the recent days with warnings.|

# Flushing

Permalink: [Flushing](https://help.qatium.com/hc/en-us/articles/23188759915793-Flushing)

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198130835985)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198147075601)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198147085457) |

_Flushing_ in Qatium is designed to work along with the Demand Spike function, assisting you in **creating your flushing sequence**.

You can use _Demand Spike_ for fire-flow analysis, new development scenarios, criticality analysis, permitting, etc. But in this case, applying different demands to your junctions or hydrants will allow you to check if there are optimal ![optimal-velocity-icon.png](https://help.qatium.com/hc/article_attachments/25198147090449) or non-optimal ![non-optimal-velocity-icon.png](https://help.qatium.com/hc/article_attachments/25198147095825) velocities for flushing and the level of discoloration risk ![discoloration-risk-icon.png](https://help.qatium.com/hc/article_attachments/25198147100433).

![Flushing panel.png](https://help.qatium.com/hc/article_attachments/23188773676689)

## Design a flushing sequence using Demand Spike

First things first: have a look at how the _Demand Spike_ panel looks like and the tools and insights you can find in there.

![Demand spike panel.png](https://help.qatium.com/hc/article_attachments/23189304065937)

Now, to design a flushing sequence using Demand Spike:

1. Switch to the _Flushing_ mode in _Work Modes_![work-modes-panel-button.png](https://help.qatium.com/hc/article_attachments/25198147105041)
2. Go to the timeline and select the time you want to test this scenario
3. Select a junction ![junction-icon.png](https://help.qatium.com/hc/article_attachments/25198147110417) or hydrant ![hydrant-icon.png](https://help.qatium.com/hc/article_attachments/25198130893073)
4. Click or move the slider to increase the demand to reach an optimal flushing velocity in the targeted pipes, or type directly the new value in the box.

![flushing.gif](https://help.qatium.com/hc/article_attachments/23188759877265)

If the pipes maintain a velocity between **1.5 m/s (4.92ft/s) and 3 m/s (9.84ft/s)**, Qatium will consider it **optimal for flushing** and highlight the pipes in green.

Qatium will also analyze and compare flow and velocities to find potential discoloration issues and show the affected pipes in orange. This indicator only appears when:

1. The **flow direction is reversed** and the **current velocity is >= 0.1m/s**
2. There is an enormous increase **in velocity**

![FLUSHING_2.gif](https://help.qatium.com/hc/article_attachments/23188759878417)

In the _Demand Spike_ panel, you’ll also see the resulting pressure for the selected hydrant in red, orange or green, depending on the pressure range:

![Demand spike pressures (1).png](https://help.qatium.com/hc/article_attachments/23188773688721)

![Demand spike pressures.png](https://help.qatium.com/hc/article_attachments/23189273831185)

All done? You can press the _Reset ![reset-button.png](https://help.qatium.com/hc/article_attachments/25198147125521)_ button in the panel to reset the value for a selected junction. If you wish to start again and try new scenarios, click on the trash can ![delete-button.png](https://help.qatium.com/hc/article_attachments/25198130902673) in the _Network Versions_ ![network-versions-panel-button.png](https://help.qatium.com/hc/article_attachments/25198130918545) panel.

![RESET.gif](https://help.qatium.com/hc/article_attachments/23188773698449)

**Important**:  
Qatium applies the new demands from a specific time onwards. E.g. Applying the change at 12 am might not cause the same state of the network as applying it at 4 pm. You can close the Demand Spike panel, losing no value or the selected junction. Qatium will remember your selection the next time you open the panel.

## Plan a unidirectional flushing

You can also optimize your flushing by making the flow unidirectional. Define the optimal flushing operation by closing valves and forcing the water to flow from a single direction toward your hydrant. This allows you to reduce water waste by lowering the flow rate required and helps ensure you're meeting the correct velocity to clean the main.

Once you’ve completed the [steps to design a flushing sequence](https://help.qatium.com/hc/en-us/articles/23188759915793-Flushing#h_01HRF01KM5FH5BA210S33RC2ZT):

1. Select a valve next to the main you target to flush
2. Switch the toggle OFF ![toggle-off-button.png](https://help.qatium.com/hc/article_attachments/25198147152017)
3. Reduce the demand in the _Demand Spike_ panel until finding the minimum value for which your targeted main maintains an optimal velocity

Repeat steps 1 & 2 as many times as valves are neighboring the targeted main.

![UNIDIRECTIONAL FLUSHING.gif](https://help.qatium.com/hc/article_attachments/23188773701905)

Same as when changing hydrants’ demand, Qatium will show you optimal ![optimal-velocity-icon.png](https://help.qatium.com/hc/article_attachments/25198147090449) or non-optimal ![non-optimal-velocity-icon.png](https://help.qatium.com/hc/article_attachments/25198147095825) velocities for flushing and the level of discoloration risk![discoloration-risk-icon.png](https://help.qatium.com/hc/article_attachments/25198147100433).

# Work modes

Permalink: [Work modes](https://help.qatium.com/hc/en-us/articles/23184926672529-Work-modes)

This functionality allows you to focus on concrete tasks quickly. Each work mode is a preset designed especially to help you perform operations in your network easily. From there, you’ll be able to hide or display whatever you need as you do normally.

Currently, you can work on the following modes.

## Overview

This is the default work mode when the network has delimited [zones](https://help.qatium.com/hc/en-us/articles/23182710465937). Here, you’ll see the _Zones_ panel opened and its toggle enabled: this will allow you to see the zone inlets and outlets, pressures, and boundary valves when clicking on each zone. The pressures will be hidden, and in the _Network Elements_ panel you’ll see some layers are disabled in the seek for clarity.

It’s the perfect work mode to test scenarios like [pressure management](https://help.qatium.com/hc/en-us/articles/23188450723857).

![Work modes _ Overview.png](https://help.qatium.com/hc/article_attachments/23184926660241)

## Analysis

Here you’ll have the pressure and flow panels & layers displayed, and the zones are hidden. It’s the best work mode to check the general state of your network.

![Work modes _ Analysis.png](https://help.qatium.com/hc/article_attachments/23184926662161)

## Warnings

If you have readings uploaded to your network, you’ll be able to access this work mode to focus on the assets with issues. The panels and the pressure layer are hidden to have a clear vision while working on the problem.

In this work mode, you’ll be able to focus, among other things, on your [tank management](https://help.qatium.com/hc/en-us/articles/23187934088721) when their levels are trespassing the [thresholds](https://help.qatium.com/hc/en-us/articles/23160072624529).

![Work modes _ Warnings.png](https://help.qatium.com/hc/article_attachments/23184926663185)

## Shutdown

This work mode is the quick and easy way to perform a [watermain shutdown](https://help.qatium.com/hc/en-us/articles/23187104077585-Watermain-shutdown) in Qatium. The pressure & the flow panel are hidden along with the pressure layer. This way, you can focus on the flow and operate pipes with the _Shutdown_ panel.

![Work modes _ Shutdown.png](https://help.qatium.com/hc/article_attachments/23184926664081)

## Flushing

In this work mode, you’ll only see the _Flushing_ and the _Demand Spike_ panel, along with the flow layer on the map. This will help you focus on designing your [flushing sequence](https://help.qatium.com/hc/en-us/articles/23188759915793-Flushing).

![Work modes _ Flushing.png](https://help.qatium.com/hc/article_attachments/23184926665105)

## Synoptic

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198674259985)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198636953105)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198674278033) |

This is a high-level representation of your network. It represents only the major assets, their performance, and interconnections, reducing the noise and providing a simplified view that is particularly useful in large networks.

![Work modes _ Synoptic.png](https://help.qatium.com/hc/article_attachments/23184926667025)

To **activate the synoptic mode** for your network, you need to:

1. [Get in touch with Q](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=18481285238801)
2. Provide an AutoCAD .DWG file containing the drawing of your desired synoptic view.

You’ll notice that in the Synoptic work mode, everything works the same, but to offer you a clearer picture:

- Some panels and buttons will be hidden.
- You won’t be able to perform some scenarios since there are no junctions or hydrants represented.

# Accepted aliases for element’s properties

Permalink: [Accepted aliases for element’s properties](https://help.qatium.com/hc/en-us/articles/23182981293969-Accepted-aliases-for-element-s-properties)

| Element                                         | Property / Field                        | Aliases                                                                                                                                                                  |
| ----------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| All elements except Zones                       | ID                                      | Id, assetid, ASSET_ID, WATHYDRANT, WATMAINID, WATSERVICE, WATVALVEID, OBJECTID, Unit_ID, Nombre, dc_id, Name                                                             |
| Zones                                           | ID                                      | Name, Nombre, Zone, Zona, Id, text                                                                                                                                       |
| All elements                                    | Description                             | Description, Descripcion                                                                                                                                                 |
| All elements                                    | Group                                   | Group, Grupo                                                                                                                                                             |
| All elements except Zones                       | Lifecyle                                | Life, lifecycle, d_lifecycl, estado_de_servicio                                                                                                                          |
| (Lifecycle) Active                              | Active, Activo, Activa, En servicio     |
| (Lifecycle) Abandoned                           | Abandoned, Abandonada, Abandonado       |
| (Lifecycle) Proposed                            | Proposed, Propuesta, Propuesto, Planned |
| Pipes                                           | Length                                  | Shape\_\_Len, Longitud, Length, Long                                                                                                                                     |
| Pipes, valves, tanks                            | Diameter                                | diametro_nominal_dn\_\_mm\_, NominalDiameter, NOMINALDIA, Diameter_m, VALVE_SIZE, PIPE_SIZE, PIPE_DIA, Diameter, Diametro, DIAM_Ã˜, DIAM_Ø, dn_mm, Diam, Size, Ã˜, dn, Ø |
| Pipes                                           | Roughness coefficient                   | Roughness, RoughCoeff, Rugosidad, CoefRug                                                                                                                                |
| Pipes, valves                                   | Minor loss coefficient                  | MinorLoss, LossCoeff                                                                                                                                                     |
| Pipes, valves, pumps                            | Status: OPEN, CLOSED, CV                | IniStatus, Estado, Status, estado_ape, estado_act, d_presents, d_normalst, normalstat                                                                                    |
| Pipes, valves, pumps                            | Rule                                    | Rules, Rule                                                                                                                                                              |
| Pipes                                           | Material                                | Material, d_material, PIPE_MTRL                                                                                                                                          |
| Pipes                                           | Installation Date                       | FECHA_DE_INSTALACION, FechaDeInstalacion, Installation_Date, InstallationDate, created_date, FECHA_DE_I, Installati, installdat, Fecha, Date, instal, laid               |
| Pipes, junctions, tanks                         | WarningThresholdMax                     | WarningThresholdMax                                                                                                                                                      |
| WarningThresholdMin                             | WarningThresholdMin                     |
| Junctions, Valves, Pumps, Supply sources, Tanks | Elevation                               | Elevation, Elev, COTASOLERA, COTA_TER, Altura, Cota, TotalHead, Head                                                                                                     |
| Junctions (Hydrants / Customer points)          | Demand                                  | Demand, Demanda, BaseDem, DemBase                                                                                                                                        |
| Junctions (Hydrants)                            | Emitter                                 | Emitter, EmittCoef                                                                                                                                                       |
| Valves                                          | Type                                    | ValveType, Category, Family,                                                                                                                                             |

Familia, Type, Tipo, Class|
|Valves, pumps|Setting|Setting, Consigna|
|Valves, pumps|Upstream|UpstreamConnections, UP, upstream|
|Pumps|Power|Power, Potencia, Potency, Output, Force|
|Pumps|Operating curve (head curve)|pump_curve, curva_bomba, HeadCurve|
|Supply sources|Head (total elevation)|TotalHead, Head, Altura, Height|
|Tanks|Height|Height|
|Initial level|InitialLevel, StartLevel, NivelIni, IniLevel, Nivel, Level|
|Minimum level|MinimumLevel, MinLevel, NivelMin, NivMin|
|Maximum level|MaximumLevel, MaxLevel, NivelMax, NivMax|
|Minimum volume|MinimumVolume, MinVolume, VolumenMin, VolMi|
|Maximum volume|MaximumVolume, MaxVolume, VolumenMax, VolMax, Capacity, Capacidad|
|CanOverflow|CanOverflow|
|Zones|BaseDemand|BaseDem, DemBase|
|DemandPattern|DemandPattern, DemandPatt|
|Inlets|inlets, entradas|
|Outlets|outlets, salidas|

**Important**:  
Aliases are insensitive to case, accents and more than one space. For example, if you write height instead of Height the platform will still process it correctly.

# Junctions

Permalink: [Junctions](https://help.qatium.com/hc/en-us/articles/23153018143633-Junctions)

As you might know, junctions are needed to solve the mathematical graph model of system flows. Therefore, they are important to your network in Qatium.

- In case **you don't have a junction layer**, Qatium will infer where the junctions are missing and connect them to the pipes, creating a connected network.
- If **you do have a junction data layer**, Qatium will interpret the junction locations and connect them to the relevant pipes, creating a connected network. (Qatium will connect pipes with nearby junctions with a tolerance of 0.1 meters.)

To have a more complete representation of your physical network, you can also [specify which junctions are hydrants](https://help.qatium.com/hc/en-us/articles/23155950908305) and [add customer points](https://help.qatium.com/hc/en-us/articles/23156554634513) to your network.

Check the following list to set or edit other properties for your junctions in your files, and see how Qatium processes that information.

**Demands**

Usually, .inp files contain both base demand and demand pattern data. GIS files could have both or base demand only (no demand pattern). **In case any data is missing, both for .inp and GIS, we’ll infer it.**

Here’s how it works when there are no demands specified:

- If the **network contains Customer points**, Qatium distributes the demand on those assets.
- If there are **no Customer points**, we try to find junctions that are in the distribution network.

**Qatium assigns demands to all distribution junctions**, proportionally to the minimum pipe diameter that is connected with each selected node, according to the following formula:

∑ Demands x Minimum Diameter ÷ ∑ Diameters

In cases of networks without tanks and a single supply source, Qatium determines and assigns the demand based on the capacity of network assets.

The hourly pattern applied by default if there’s no demand pattern specified is the following:

![Default pattern.png](https://help.qatium.com/hc/article_attachments/24125479910801)

**Important**:  
Qatium avoids distributing demands for junctions that have been specified as hydrants or junction groups.

**Terrain elevation**

Qatium only processes elevation data when it's included as an attribute in point assets like junctions, tanks, supply sources, valves, and pumps.

**Data you add to your files**

|GIS editor|
|Field|Elevation|
|Attribute||
|---|

|EPANET|
|Property|Elevation|
|Value||
|---|

**How Qatium processes that data**

If not specified: Qatium will add it from [Mapbox elevation data](https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/).

**Water quality**

Currently, **Qatium only supports water age to calculate Water Quality**. To have accurate water quality data shown in Qatium, you must include the water age parameter in your files.
**EPANET**

1. Set _Parameter_ property to _Age_ in the Quality options in EPANET
2. Set the _Initial Quality_ property for all the nodes

![Specify water quality .INP.png](https://help.qatium.com/hc/article_attachments/23153005491345)
**GIS files**

Include the Water Age property inside your GIS data. Then add a number (up to 2 decimal places) representing the number of hours.

| GIS editor |
| ---------- | --------- |
| Field      | Water Age |
| Attribute  |           |

![junctions-water-age.png](https://help.qatium.com/hc/article_attachments/26065041949969)

**Pressure & consumption**

The data about pressure and consumption that you see on the junction’s information panel is **calculated through the simulation with all the data available from your imported files**. The more information you provide, the more complete your network in Qatium will be.

**Thresholds**

If you have readings added to your network, **you can configure warnings by setting thresholds** (minimum and maximum values) for your assets, and if the data received is below or above them we’ll let you know.

**Data you add to your files**

|GIS editor|
|Field|WarningThresholdMinWarningThresholdMax|
|Attribute||
|---|

|EPANET|
|Property|Description|
|Value|\_\[WarningThresholdMin\]\_\[WarningThresholdMax\]

| Example: _\_1.2_12.5_ |
| --------------------- |

Threshold values in .inp files should **follow the existing order** on the description. Use an underscore to separate each value.

For example, for a junction with the following data:

- Threshold Min: 1.2
- Threshold Max: 12.5
- Type: Hydrant

The value in the description should be **_\_1.2_12.5_hydrant_**

Make sure the **units for the threshold values match the units of the variable** we're setting the warnings to. For junction pressure, use pressure unit.

**How Qatium processes that data**

If not specified, Qatium will ignore it and you won’t receive any warnings.

# Element Identifier (ID)

Permalink: [Element Identifier (ID)](https://help.qatium.com/hc/en-us/articles/23124270173329-Element-Identifier-ID)

To easily locate your elements on the map, it’s important to assign identifiers (IDs) to all of them.  
IDs are usually defined by default. If they aren’t or if you want to rename them, go to:

- **GIS Field = ID**
- **EPANET property = ID**

Please bear in mind that, in Qatium, the IDs of your network elements must be unique,  
and up to 31 characters:

- All characters are considered valid, including space, tab and line break.
- Qatium will automatically shorten a longer ID to 31 characters and replace any unidentified character with a number (only for GIS files).

If 2 or more of your elements have the same ID, Qatium will rename the duplicated ones in the following way: **original ID + # (separator) + sequential number*.***

_For example,_ if Tank ID, Supply source ID, and Pipe ID = Nellybay, Qatium will assign new IDs:

**Supply source** = Nellybay | **Tank** = Nellybay#2 | **Pipe** = Nellybay#3

When renaming duplicated IDs, Qatium applies hierarchy according to the following list.

| Priority  | Asset                         |
| --------- | ----------------------------- |
| **+**     | 1\. Reservoir (Supply source) |
|           | 2\. Tank                      |
| 3\. Pump  |
| 4\. Valve |
| 5\. Pipe  |
| **\-**    | 6\. Junction                  |

## Splitting pipes IDs

The same happens whenever we split pipes into several segments. We do that when there’s a connection with another pipe, or when a customer receives water from the individual segments of the split pipes. We identify those as part of the original pipe by adding a suffix to their name.

E.g. **Original ID**: T-0054 > **ID for that pipe segments**: T-0054#2, T-0054#3, etc.

On the map, you can interact with each segment without losing the whole pipe they belong to.

![](https://help.qatium.com/hc/article_attachments/23124270164753)

## Zones IDs

**For Zones**, Qatium will check for duplicates and complete any duplicate IDs with “#\[number\]”.

For example: 3 zones with the ID “MyZone” will become “MyZone”, “MyZone#2” and “MyZone#3”

If there’s **no ID specified for your zones**, Qatium will use “zone #” (where # is a number) for your imported zones. E.g._ZONE 1, ZONE 2, ZONE 3_

# I can't access the pressure, flow and/or tank autonomy panels

Permalink: [I can't access the pressure, flow and/or tank autonomy panels](https://help.qatium.com/hc/en-us/articles/23099995668241-I-can-t-access-the-pressure-flow-and-or-tank-autonomy-panels)

If you are running scenarios and you can’t access these panels, it’s most likely because something went wrong during the simulation. Qatium simulates the behavior of each network using the [EPANET toolkit](http://wateranalytics.org/EPANET/), which can raise some errors while it is calculating and/or finishing the simulation process without returning the results for all the hours shown in the timeline.

In the hours when there are results, they will be shown on the map, in the asset details, and in the pressure, flow, and tank autonomy panels. But if for a selected time step there are no available results, these panels will be disabled and hidden.

Remember that in the Synoptic view, only relevant panels will be available.  
_E.g.: the Demand spike panel won’t be available as junctions are not visible from the Synoptic view._

# I got a “wrong format” error when uploading CSV files

Permalink: [I got a “wrong format” error when uploading CSV files](https://help.qatium.com/hc/en-us/articles/23099866749329-I-got-a-wrong-format-error-when-uploading-CSV-files)

Your CSV files must have a **specific structure** so that Qatium can interpret them correctly. The data columns may be in **any order**, but they should have the **exact same labels** as shown in [this article](https://help.qatium.com/hc/en-us/articles/23507245352721-Upload-readings-in-a-CSV-file).

# I uploaded a .inp file and it’s not working

Permalink: [I uploaded a .inp file and it’s not working](https://help.qatium.com/hc/en-us/articles/23098832178577-I-uploaded-a-inp-file-and-it-s-not-working)

Qatium accepts only valid .inp files per EPANET 2.2 standards. If your .inp file runs in EPANET 2.2 but the problem persists, we’ll review the model and make the adjustments for it to work.

The problem may also be that asset IDs are too long. Qatium and EPANET 2.2 only support 31-character IDs, so if you are exporting from EPANET 2.0 or other software vendors to .inp, make sure IDs don't exceed that length.

If you need help, please [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# How to report a bug

Permalink: [How to report a bug](https://help.qatium.com/hc/en-us/articles/23097692285713-How-to-report-a-bug)

## Before reporting a bug

1. Check the [Qatium Status Page](https://status.qatium.com/) to see if it’s a performance problem
2. Check if the issue is also happening in incognito (private) mode and a different browser
3. Disable the browser extensions. Sometimes they may cause some issues.
4. If you experience performance issues on a specific network, try [duplicating](https://help.qatium.com/hc/en-us/articles/23070367405969-Duplicate-a-network) it and see if the issue persists on the copied one.

## How to report a bug

If any of the steps above solve the problem, [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369) and provide as many details as possible - this will help us understand your issue right away so we can better help you.

1. Describe the issue including screenshots, GIFs, or a short video.
2. If the issue happens on a specific network, share the network ID with us.

![Report a bug.png](https://help.qatium.com/hc/article_attachments/23097692277265)

3. If the issue is about a specific uploaded file, send us the file.

4. Specify your device, operating system, and browser version.

**Optional**: if you know how to do it, you can also provide your browser console and network logs.

# Roles in networks

Permalink: [Roles in networks](https://help.qatium.com/hc/en-us/articles/23069891400977-Roles-in-networks)

For networks, we also have **Owner and Member roles**. These roles are defined by the owner of the workspace or any other person who has an Owner role assigned to them.

Whenever you upload a network to a workspace, you’ll become the owner of that network and therefore you’ll have an Owner role.

Depending on your role, you can do the following actions:

|                                           |                                                                                                                                                                                                   |
| ----------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                           |                                                                                             **Owner**                                                                                             | **Member**                                                                                                                                                                                        |
| Access a network                          | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |
| Delete a network from a workspace         | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Duplicate a network                       | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Rename a network                          | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Download a network                        | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Share a network with other members        | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Change users' roles                       | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| See the people having access to a network | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Upload data to a network                  | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |
| Add and recategorize layers               | ![](https://lh7-us.googleusercontent.com/QS8hBdSuOKEw7eCcDzFeb2gE7L5mfLdEcDs9py5cpeD6Q-jsh1pN7XOaQaBJroJatFrGAEWbsqztVDAt5k6TLRoFvJ7WeO60J9Ays38G0o1SMHRAlIYyM-ibWxXNAzjjz5ANHlQHrMjWnJaJ9FvtgxA) |                                                                                                                                                                                                   |

# Qatium for model building

Permalink: [Qatium for model building](https://help.qatium.com/hc/en-us/articles/23067635368849-Qatium-for-model-building)

We know that sometimes it’s difficult to have a complete dataset for your network, and we want to help. **Qatium allows you to build a hydraulic model from GIS data, with no modeling skills required**.

If you already have a model to upload into Qatium, you can update it and improve your network by adding new information.

**Tip from Q**:  
Download the [.inp file example](https://help.qatium.com/hc/article_attachments/25600650572561) in the additional resources for a demo of the data to include.

## Create a model

**Gather all your GIS files and drag & drop them into Qatium**, we’ll process the data and try to create the most accurate version of your network.

Learn more about [how to upload your files into Qatium](https://help.qatium.com/hc/en-us/articles/23489615211921-Upload-your-network) in this article.

**Tip from Q**:  
Download the [GIS file example](https://help.qatium.com/hc/article_attachments/25600650602641) in the additional resources for a demo of the data to include.

## Update a model

You already have a .inp model, but it’s old or incomplete? Replace it with an updated one or add GIS files to complement it—Qatium will take care of the rest.

The process is almost the same as when you create a new network:

- You can **replace** the existing EPANET file with a new one by dragging & dropping it into the interface.
- You can **add new GIS layers or replace** the existing ones by dragging & dropping them into the interface.

You can do this as many times as necessary anytime you need to update your network with new information.

Learn more in [this article](https://help.qatium.com/hc/en-us/articles/23512027218321-Update-your-network).

## Validate your model

With Qatium, you can **validate your model against historical or live data** to compare the model simulation results with actual information. You can do that quickly and easily by [adding readings to your network through CSV files](https://help.qatium.com/hc/en-us/articles/23507245352721-Upload-readings-in-a-CSV-file).

**Tip from Q**:  
Download the [CSV template](https://help.qatium.com/hc/article_attachments/25600634666001) in the additional resources for a demo of the data to include.

## Resources

# Access a team workspace

Permalink: [Access a team workspace](https://help.qatium.com/hc/en-us/articles/23065637047697-Access-a-team-workspace)

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25665266808081)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25665251603857)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25665251610769) |

Workspaces are a great tool to collaborate in real-time on [operational scenarios](https://help.qatium.com/hc/en-us/articles/23066075657105-Qatium-for-network-operations) with multiple stakeholders. After signing up, you will land on your personal workspace (_My networks_).

To **access another workspace or organization**, you simply need to:

1. Go to the workspace name
2. Select the workspace you wish to access

![ACCESS A WORKSPACE.gif](https://help.qatium.com/hc/article_attachments/25134650992913)

When having multiple workspaces, each time you sign into Qatium, you’ll land on the last one you accessed. This is what you’ll find in your workspace:

![Workspace controls.png](https://help.qatium.com/hc/article_attachments/23065652940177)

Learn more about collaboration tools in Qatium in [this section](https://help.qatium.com/hc/en-us/sections/23069922404369-Tools-for-team-collaboration).

# How Qatium works

Permalink: [How Qatium works](https://help.qatium.com/hc/en-us/articles/23063998429585-How-Qatium-works)

To provide you with a complete water management platform experience, **Qatium processes multiple datasets from multiple data sources**, like geographic information, asset information, hydraulic properties, historical and live readings, etc.

We use different technologies–AI, ML, genetic algorithms, hydraulic modeling engines, etc.–to **extract, combine, validate, and analyze** these datasets, allowing you to get easy access to insights tailored to your needs.

## Network building

If you are wondering how Qatium transforms all your data into a digital replica of your network ready to operate, here’s how. We try our best to **process all the information you upload** into Qatium and to **fill any gaps** for you to work with the **most accurate version of the network**.

Once you’ve uploaded your files into Qatium, we run some checks to validate the data.

1. **Data filtering**: we filter and discard any information that is not useful for the network.

   - Objects without geometry
   - [Overlapping nodes](https://help.qatium.com/hc/en-us/articles/23183347770257)
   - Loop pipes and isolated junctions
   - Elements not connected to a supply source or a tank

2. **Data validation**: Qatium validates your data before creating a network from it, ensuring that it’s coherent. We'll read the layer attributes/properties and if they don't pass the validation stage, we’ll ignore them and replace the discarded values with default values.
3. **Data inference**: we infer missing and/or invalid data with a series of calculated values.

After that, Q–our digital assistant–will give you support and provide you with information about your network. At that moment, you are ready to test different scenarios in a digital environment.

Similar to the physical network, **you can continuously build, improve, and update your Qatium network**. Whether new datasets became available, assets changed properties, the network expanded to new development, etc., we got your back. We have created a [detailed guide](https://help.qatium.com/hc/en-us/articles/23512027218321-Update-your-network) on how to update all parts of your network.

Remember, **the more data you upload into Qatium, the more complete your network will be**. In [this article](https://help.qatium.com/hc/en-us/articles/23064699184785), we teach you how to upload your files and build an ideal network to work with in Qatium.

## Replicating your network behavior

With all the information provided, Qatium can create a **digital network containing all the details about how your network elements operate**, and ultimately how the water moves through your network.

Qatium uses a simulation engine that calculates the flows, pressure, tank levels, and asset operations in your network for an average day. With that, you can easily create and test different [scenarios](https://help.qatium.com/hc/en-us/articles/23066075657105) to answer what-if questions. For example:

- What happens if I need to maintain a pipe?
- What will be the pressures and flows in my network?
- Which area will be out of water?
- What if a valve is not operable, which valves are the ones I should operate instead and what is the impact on my customers?
- Etc.

## Live data connection

**Connecting your live data to your network in Qatium** will create a more accurate network to work with. Qatium will keep the network updated with the readings and display a model accuracy score and a model deviation panel for each sensor type implemented. Both model deviation and model accuracy are indicators of the difference between the data received from the sensors and the calculated by the model.

Visit the following articles for more details:

- [How to edit element properties in your files](https://help.qatium.com/hc/en-us/articles/23513322177041-Edit-element-properties)
- [Editing network elements](https://help.qatium.com/hc/en-us/categories/23123485977745-Editing-network-elements)
- [How to update a model](https://help.qatium.com/hc/en-us/articles/23067635368849)
- [Connecting live data](https://help.qatium.com/hc/en-us/categories/23506850128273-Readings-live-data)

# What is water age and why is it important?

Permalink: [What is water age and why is it important?](https://help.qatium.com/hc/en-us/articles/18313412244881-What-is-water-age-and-why-is-it-important)

In the context of water quality modeling, **water age** refers to the time it takes for water to travel from a water source to consumers. Water age is a general indicator of water quality, with lower water age indicating better water quality.

Knowing the water age in a pressurized network helps identify areas of the network where water may be stagnating, thus increasing the risk of bacterial contamination.

This information can be used to optimize network design and operation, minimize water losses, and improve the efficiency of water treatment processes.

# How do I connect my SCADA or AMI data?

Permalink: [How do I connect my SCADA or AMI data?](https://help.qatium.com/hc/en-us/articles/16869087596433-How-do-I-connect-my-SCADA-or-AMI-data)

You can send your SCADA data through our **REST API endpoint**. That way we ensure the highest level of data security from your standpoint, as the platform will only be able to see the data you specifically send to us.

This way, **you control your data** changing the volume, type or frequency sent through the API.

Learn more in the [Qatium API Documentation.](https://docs.ingest.api.qatium.app/)

# What happens to my data in Qatium?

Permalink: [What happens to my data in Qatium?](https://help.qatium.com/hc/en-us/articles/16867913443089-What-happens-to-my-data-in-Qatium)

Your data is **encrypted and stored securely** via [Amazon Web Services (AWS)](https://aws.amazon.com/), and nobody can access it without your permission.

You can delete your models from the user interface any time, and **all data will be removed** from the cloud. If you wish to delete all data, including your account, you may [contact Qatium](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369&tf_subject=Delete%20my%20data%20uploaded%20to%20Qatium).

**Qatium does not share, publish or monetize your data.** Please visit our [Security page](https://qatium.com/security/) for further information.

# Sign in & sign out

Permalink: [Sign in & sign out](https://help.qatium.com/hc/en-us/articles/16164151183505-Sign-in-sign-out)

If you've already created your account, you just have to follow these steps to **sign in**:

1. Go to [https://qatium.](https://qatium.com/)app/login
2. Select _Start,_ enter your email address, and click _Continue_
3. We'll send you a one-time code. Use it to confirm your login, and you’re in!

![SIGN IN.gif](https://help.qatium.com/hc/article_attachments/23068458033681)

Whenever you want to **sign out** in two easy steps, your session will be closed:

1. Go to the profile menu in the top right corner of the window
2. Select _Sign out_

![SIGN OUT.gif](https://help.qatium.com/hc/article_attachments/23068458048657)

**Important**:  
Check your spam folder or enter an alternative email if you can’t see the code. If you are still experiencing issues, don't hesitate to [get in touch with Q](https://help.qatium.com/hc/en-us/requests/new/?ticket_form_id=16143842484369).

# Meet Q, your digital water assistant

Permalink: [Meet Q, your digital water assistant](https://help.qatium.com/hc/en-us/articles/25695554334353-Meet-Q-your-digital-water-assistant)

During your Qatium journey you’ll have Q — your digital water assistant, always there to help you out.

They’ll give you information about network building, things to improve, errors, and other valuable insights to help you understand and work with Qatium better.

You can launch Q anytime, both from the workspace and inside the network.

![open-q-chat.gif](https://help.qatium.com/hc/article_attachments/25695569979665)

Here are some things you can ask Q to help you with:

- Solve general questions about Qatium and how the platform works.
- Locate and select assets in your network.
- Activate work modes for you to focus on specific tasks.
- Provide and open the details about a specific network asset.
- Apply and reset a demand in a particular junction.
- Set a pressure value to a particular junction.
- Provide information about readings and the time they were taken.
- Hide and show elements on the map.
- Set valve settings.
- Or even set the status (open, closed, etc.) for pipes, pumps and valves.

**Just open the assistant and ask Q whatever you need**.

![q-close-valve.gif](https://help.qatium.com/hc/article_attachments/25695554326417)

Some examples of queries for Q might be:

_\- Hey Q, close valve V_29285042_

_\- Open Picnic_P1 details_

_\- What’s the downstream pressure of Picnic_P1?_

_\- Please hide all elements but pumps_

_![Q-conversation-example.png](https://help.qatium.com/hc/article_attachments/26155022794385)_

**Tip from Q**:  
Keep your questions and requests simple, just like in any casual conversation. You can speak to me as if I were one of your colleagues.

# Upload your network to Qatium

Permalink: [Upload your network to Qatium](https://help.qatium.com/hc/en-us/articles/25470663820305-Upload-your-network-to-Qatium)

Now that you know the platform and have tested your first scenario, you are ready to upload your network into Qatium. It’s very easy!

- If you already have a hydraulic model, you can simply **upload the EPANET input file (.inp)**
- If you don’t: **upload your GIS data** and we’ll create the model for you

You can also combine datasets using both GIS files and a model (.inp).

Use the _Upload_ ![upload-button.png](https://help.qatium.com/hc/article_attachments/25470670048401) button or drag & drop your files directly into the platform, and your network will be created within seconds.

[Upload your network to Qatium](https://qatium.app)

Dive deep into the uploading process and best practices by visiting [these articles](https://help.qatium.com/hc/en-us/categories/23489403764497-Uploading-your-network).

# Water quality sensor data is not displayed

Permalink: [Water quality sensor data is not displayed](https://help.qatium.com/hc/en-us/articles/24101307070353-Water-quality-sensor-data-is-not-displayed)

We are putting in a lot of effort to give you a better understanding of the water quality in your network. However, although you can add water quality sensor data to Qatium, at the moment we won’t process it and you won’t see it displayed on the platform.

Check our [API documentation](https://docs.ingest.api.qatium.app/?_gl=1*fgcg29*_ga*MTg2MDE2ODU0My4xNjkwMTkxNDg1*_ga_7EP3SKY3L0*MTcxMjgyODk5Mi4yOTIuMS4xNzEyODM0MTIzLjIxLjAuMA..) to see the supported data.

# Add network readings

Permalink: [Add network readings](https://help.qatium.com/hc/en-us/articles/23510154807185-Add-network-readings)

The more sensor data your network includes, the better; that’s why we always recommend adding readings whenever possible.

Adding readings allows you to validate and update your model with historical data. This way, you can compare the model simulation results with real information.

If you are the [Owner of a network](https://help.qatium.com/hc/en-us/articles/23069891400977-Roles-in-networks), you can easily import readings as CSV files.

Learn more about adding network readings in [this article](https://help.qatium.com/hc/en-us/articles/23507245352721-Upload-readings-in-a-CSV-file).

# How does Qatium calculate the orientation of pumps and valves?

Permalink: [How does Qatium calculate the orientation of pumps and valves?](https://help.qatium.com/hc/en-us/articles/23510069920529-How-does-Qatium-calculate-the-orientation-of-pumps-and-valves)

Qatium may go through the following stages to calculate orientation until it gets a result:

1. It calculates the shortest distance by counting the elements between water sources.

   If the distance is the same for different orientations, supply sources take priority over tanks, so that orientation is selected.

   If the distance is the same but all orientations point to the same upstream, that upstream will be selected, as it’s the only solution.

2. If distance is the same but we have different possible upstream, none is selected as upstream. In this case, Qatium looks for the shortest path based on the distance of the pipes - as long as it doesn’t include closed valves or pumps.
3. If the previous stage also fails to produce an orientation result, Qatium looks at the direction the pipe was drawn. The pipe pointing towards the element is considered upstream, and all other connections are considered downstream.

Reversely, the pipe pointing away is considered downstream; and all others are considered upstream.

# Model deviation

Permalink: [Model deviation](https://help.qatium.com/hc/en-us/articles/23508656238865-Model-deviation)

|                       |                                                                                                                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Plan availability** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197862529937)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197862536849)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197862545809) |

**Model deviation** shows the average difference between the sensor values and the network simulation values. The smaller the model deviation, the closer the real data and the simulated values are. The goal is for the model deviation to be as small as possible, with the **minimum value being 0%**.

The model deviation is calculated for each hour and it details the 3 major network variables: tank level, flow and pressure. Qatium compares the sensor value and the model value assigned to the same element at each hour, and draws an average difference between them.

To visualize the model deviation values, click on the _Deviation_ ![model-deviation-panel-button.png](https://help.qatium.com/hc/article_attachments/25197862552081) button on the right-hand side of the screen.

By turning the toggle **ON ![toggle-on-button.png](https://help.qatium.com/hc/article_attachments/25197862558609)**, you will visualize the locations where there’s a higher model deviation, or something unplanned is happening in the network (like a pipe burst), hence where you might need to focus your efforts.

The deviation values will be shown in:

- **Green**, when below **10%**
- **Orange**, when between **10%** and **20%**
- **Red**, when above **20%**

![model deviation.png](https://help.qatium.com/hc/article_attachments/23603681626385)

If there is no sensor value for a specific time or variable, the model deviation panel will not display that deviation.

**Important**:  
We calculate accuracy and deviation metrics only within the base version of the network (_My network_). In the scenario version (_My scenario_), Qatium will neither update the accuracy of calculations nor display the deviations panel.

# Add signal mappings

Permalink: [Add signal mappings](https://help.qatium.com/hc/en-us/articles/23508344352785-Add-signal-mappings)

If you’re already sending your sensor data to the Qatium asset IDs, you can skip this article. But if you’re sending your sensor ID (e.g. SCADA tag ID, or AMI feed ID or etc.), we created the signal mapping file for you.

The signal mapping file is a CSV file that maps what reading should be associated with which asset and asset property. For example, _BPS1.pressure , Pump1, downstreamPressure_.

You can upload this file just as any other layer or network, by dragging & dropping it directly into your network.

You can upload the signal mappings files **together with other network files in a ZIP file** or add them separately to existing networks, but there can **only be 1 signal mapping file per network.** Every new file added will replace any existing one(s).

The files need to have a specific structure for Qatium to correctly interpret the signal mappings.

Besides having the _.csv_ file extension, they should follow the structure below:

```
SignalId, assetId, assetProperty"ScadaFeed#1","Pipe#1","flow""PressureSensor#1","Hydrant#1","pressure""PressureSensor#2","BoosterStation1Pump#1","downstreamPressure"
```

For the readings to be mapped onto an asset correctly, the asset field in your readings file should include the reading, not the asset or property.  
Make sure to replace that **asset ID** **with** the corresponding **signal ID** in your readings file and reupload it.

For example, if this is your signal mapping file,

```
SignalId, assetId, assetProperty"ScadaFeed#1","Pipe#1","flow"
```

your readings file should look like this

**✅**

```
"time","asset","metric","value","unit""2024-01-01 00:00:00","ScadaFeed#1","flow","1.723","l/s"
```

instead of this

**❌**

```
"time","asset","metric","value","unit""2024-01-01 00:00:00","Pipe#1","flow","1.723","l/s"
```

**Important**:  
Please note that signal mappings are **case-insensitive**. This means that it makes no difference if your signal IDs are written in lowercase or uppercase letters in the mappings file; Qatium will be able to associate them with the correct target asset ID.

To convert values from your sensor readings, add a**_valueFactor_** column to your file:

```
SignalId, assetId, assetProperty, valueFactor"PressureSensor#1","Hydrant#1","pressure",10.199773339984
```

The _valueFactor_ is a multiplier that allows unit conversions.For example,if your sensor is capturing pressure values in _bars_ but your network pressure is in _m_, the associated valueFactor would be 10.2

**Important**:  
The _valueFactor_ only admits numeric values and decimal points. Anything else will be ignored.

Here are the asset properties that you can update in this way:

|          |                                                       |
| -------- | ----------------------------------------------------- |
| Asset    | Property                                              |
| Tank     | level                                                 |
| Junction | demand, pressure                                      |
| Pipe     | flow, status                                          |
| Pump     | status, setting, upstreamPressure, downstreamPressure |
| Valve    | status, setting, upstreamPressure, downstreamPressure |

# What happens to my network after I’ve deleted it? Can I recover my data?

Permalink: [What happens to my network after I’ve deleted it? Can I recover my data?](https://help.qatium.com/hc/en-us/articles/23488960189457-What-happens-to-my-network-after-I-ve-deleted-it-Can-I-recover-my-data)

When you delete your network, it will **no longer be accessible** from the workspace.

Only **_Owners_** **can delete networks**. As an owner you can manage who has permission to delete your network. We recommend being cautious when managing roles and permissions.

Your network is **recoverable for 30 days only for the Pro, Business and Enterprise** plans. To request a network recovery, please [contact Qatium.](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369)

# Map controls

Permalink: [Map controls](https://help.qatium.com/hc/en-us/articles/23480483973777-Map-controls)

Once inside a network, you have various options to visualize and move around the map. Use the map control buttons at the bottom right corner.

![Map controls.png](https://help.qatium.com/hc/article_attachments/23480529378321)

The following table shows the map controls and their use:

| Map control button                                                                             | Use               | Action                                                                                |
| ---------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------- |
| \--                                                                                            | Pan               | Click and hold your pointer to move freely around the map                             |
| ![zoom-in-button.png](https://help.qatium.com/hc/article_attachments/25196957167121)           | Zoom in           | Click to zoom in/out OR use your scroll wheel or the scroll movement on your touchpad |
| ![zoom-out-button.png](https://help.qatium.com/hc/article_attachments/25196957175313)          | Zoom out          |
| ![frame-network-map-button.png](https://help.qatium.com/hc/article_attachments/25196957183761) | Frame network/map | Click to center the map                                                               |
| ![3d-view-button.png](https://help.qatium.com/hc/article_attachments/25196957190801)           | 2D / 3D view      | Click to switch between 2D and 3D view                                                |

OR

**PC users**: Right-click, hold, and move the map to the angle you want

**Mac users**: Right-click, hold, and move the map to the angle you want|
|![satellite-view-button.png](https://help.qatium.com/hc/article_attachments/25196941322513)|Satellite view|Click to activate.|
|\--|Rotate|**PC users**: Right-click, hold, and move the map to the angle you want

**Mac users**: Ctrl+click, hold, and move the map to the angle you want|
|![reset-north-map-button.png](https://help.qatium.com/hc/article_attachments/25196941333393)|Reset North|If you have rotated the map, click to return to North-facing view|

# Tank management

Permalink: [Tank management](https://help.qatium.com/hc/en-us/articles/23187934088721-Tank-management)

Tanks are among the most important assets in the network, and managing them is a critical part of your network management.

## Tanks details

Qatium distills all available tank data to provide you with clear and essential information. Hover over or click on the tank ![tank-icon.png](https://help.qatium.com/hc/article_attachments/25197944530193) icon to see it.

![TANK HOVER OVER + CLIC.gif](https://help.qatium.com/hc/article_attachments/23540857504657)

## Tank autonomy

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197944531601)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197944539921)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197928388881) |

Not being able to provide water to its customers is probably one of the greatest fears of any water utility. This is the reason we want to give you as much insights as possible into the state of your tanks.

Through the _Tank Autonomy_ ![tank-autonomy-panel-button.png](https://help.qatium.com/hc/article_attachments/25197928392337) panel, you’ll also see–as the name implies–an estimate of your tanks’ autonomy.

![TANK AUTONOMY PANEL.gif](https://help.qatium.com/hc/article_attachments/23187934080273)

## Setting tank level warnings

On top of that, **you can set leading indicators of issues in your tanks**, and access detailed information about the current situation. Operators can use warnings to devise a plan of action for preventive countermeasures against any service disruption.

**To configure warnings, set thresholds** (minimum and maximum values) for your tanks **in your GIS files or EPANET** according to the following specifications:

| GIS editor |
| ---------- | --------------------------------------- |
| Field      | WarningThresholdMin WarningThresholdMax |
| Attribute  | number                                  |

| EPANET   |
| -------- | ------------------------------------------------ |
| Property | Description                                      |
| Value    | \[WarningThresholdMin\]\_\[WarningThresholdMax\] |

Example: _DI_1.2_12.5_|

Qatium will analyze and process your live data to find relevant events and display warnings when your tanks’ autonomy trespasses your thresholds.

![Tank warnings.png](https://help.qatium.com/hc/article_attachments/23602093548689)

If you want to see how the network behaves with different thresholds, **you can edit them directly from the asset tooltip**. In that moment, you’ll switch to scenario mode, and you will see the changes inside the asset detail information.

# Network versions

Permalink: [Network versions](https://help.qatium.com/hc/en-us/articles/23185286963601-Network-versions)

The _Network Versions_ ![network-versions-panel-button.png](https://help.qatium.com/hc/article_attachments/25198644969105) panel allows you to evaluate the impacts of your tests by **switching between:**

- **My network** (with the original settings)
- **My scenario** (where you run your tests)

![Network versions highlighted.png](https://help.qatium.com/hc/article_attachments/23185286938257)

The moment you start testing scenarios, Qatium will change automatically from _My network_ to _My scenario_, and every change you make will be highlighted in the timeline at the specific time step with blue dots.

![Timeline changes.png](https://help.qatium.com/hc/article_attachments/23185308569105)

If you need to start over and perform new scenarios, just click on the trash can ![delete-button.png](https://help.qatium.com/hc/article_attachments/25198644976017) next to _My Scenario_ and keep exploring possibilities.

![Delete scenario.png](https://help.qatium.com/hc/article_attachments/23185286945297)

**Tip from Q**:  
You can open Qatium in two separate browser windows to see at the same time the impact of your changes both in your base network and the scenario.

**Important**:  
For now, Qatium doesn’t save or export scenarios. Be careful when you close your browser tab or leave your current network, you won’t be able to go back to the scenario you’ve created.

# Accepted pipe materials and their aliases

Permalink: [Accepted pipe materials and their aliases](https://help.qatium.com/hc/en-us/articles/23183083685777-Accepted-pipe-materials-and-their-aliases)

|                                     |                                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Material full name                  | Accepted aliases                                                                                                    |
| Asbestos Cement                     | AC, Asbestos cement, FC, Fibrocemento, fibrocement, uralite, uralita                                                |
| Abrasion Resistant Outerwrap        | ARO, Abrasion Resistant Outerwrap, Envoltura exterior resistente a la abrasion                                      |
| Cast Iron                           | CI, Cast Iron, Hierro fundido, Fundicion Gris                                                                       |
| Cooper                              | COPP, Cooper, Cobre                                                                                                 |
| Concrete Without Sheet Metal Jacket | CWOSMJ, CONC, Concrete Without Sheet Metal Jacket, Hormigon sin camisa de chapa,                                    |
| Concrete With Sheet Metal Jacket    | CWSMJ, CONCC, Concrete With Sheet Metal Jacket, HCC, Hormigon con camisa de chapa                                   |
| Ductile Iron                        | DI, Ductile Iron, Hierro ductil, FD, Fundicion ductil                                                               |
| Lined Ductile Iron                  | DIL, Lined Ductile Iron, Hierro ductil revestido                                                                    |
| Iron                                | FE, Iron, Hierro                                                                                                    |
| Galvanized Iron                     | GI, Galvanized Iron, HG, Hierro galvanizado                                                                         |
| Lined Galvanized Iron               | GIL, Lined galvanised iron, Lined galvanized iron, Hierro galvanizado revestido                                     |
| High Density Polyethylene           | HDPE, High Density Polyethylene, Polietileno de alta densidad                                                       |
| Lead                                | L, Lead, Plomo                                                                                                      |
| Low Density Polyethylene            | LDPE, Low Density Polyethylene, Polietileno de baja densidad, Polietileno de densidad baja                          |
| Medium Density Polyethylene         | MDPE, Medium Density Polyethylene, Polietileno de densidad media                                                    |
| Not available                       | NA, N/A, Not available, No disponible                                                                               |
| Pretressed Concrete                 | PC, Pretressed Concrete, Hormigon pretensado                                                                        |
| Polyethylene                        | PE, Polyethylene, Polietileno                                                                                       |
| Polyethylene 100                    | PE100, Polietileno 100, Polyethylene 100                                                                            |
| Polyethylene 80                     | PE80, Polietileno 80, Polyethylene 80                                                                               |
| Polyvinyl Chloride                  | PVC, Polyvinylchloride, Polyvinyl Chloride, Policloruro de vinilo                                                   |
| Oriented PVC                        | PVCO, Oriented PVC, PVC orientado                                                                                   |
| Reinforced Concrete                 | RC, Reinforced Concrete, Hormigon armado                                                                            |
| Steel                               | S, Steel, Acero                                                                                                     |
| Spun Iron                           | SI, Spun Iron, Hierro (spun)                                                                                        |
| Stainless Steel                     | SS, Stainless Steel, Acero inoxidable                                                                               |
| Unknown                             | NIL, UNK, Unknown, Sin determinar, Desconocido                                                                      |
| Unplasticized PVC                   | UPVC,Unplasticized PVC, PVC no plastificado, Unplasticized polyvinylchloride, Policloruro de vinilo no plastificado |

**Important**:  
Aliases are insensitive to case, accents and more than one space. For example, if you write steel instead of Steel the platform will still process it correctly.

# Hydrants

Permalink: [Hydrants](https://help.qatium.com/hc/en-us/articles/23155950908305-Hydrants)

We recommend that you specify **which junctions represent hydrants** directly on EPANET or your GIS files. Otherwise, Qatium will not be able to identify them. You can do it following the instructions in the table below.

**Data you add to your files**

| GIS editor |
| ---------- | --------- |
| Field      | Group     |
| Attribute  | hydrant\* |

| EPANET   |
| -------- | ----------- | -------- | ----------- |
| Option 1 | Option 2    |
| Property | Description | Property | Junction ID |
| Value    | hydrant\*   | Value    | H\_         |

_E.g.: H_12344_|

**How Qatium processes that data**

If not specified, it’ll remain as junction.

\*_Hydrant_ can be replaced by any of the following aliases: faucet, fire, hydrant, hidrante, incendio, boca, riego, salida, spigot.

**Notes:**

You can also specify hydrants directly in the .inp file using a text editor. Edit the file including the group in the description or in the extra properties column that appears on fifth position.  
Example: 25_35\_\_hydrant;aDescription

**Emitter coefficient**

**Data you add to your files**

| GIS editor |
| ---------- | ------- |
| Field      | Emitter |
| Attribute  |         |

| EPANET   |
| -------- | ------- |
| Property | Emitter |
| Value    |         |

**How Qatium processes that data**

If not specified, Qatium will ignore it.

**Water quality**

Currently, **Qatium only supports water age to calculate Water Quality**. To have accurate water quality data shown in Qatium, you must include the water age parameter in your files.
**EPANET**

1. Set _Parameter_ property to _Age_ in the Quality options in EPANET
2. Set the _Initial Quality_ property for all the nodes

![Specify water quality .INP.png](https://help.qatium.com/hc/article_attachments/23155950889361)
**GIS files**

Include the Water Age property inside your GIS data. Then add a number (up to 2 decimal places) representing the number of hours.

| GIS editor |
| ---------- | --------- |
| Field      | Water Age |
| Attribute  |           |

# Life cycle

Permalink: [Life cycle](https://help.qatium.com/hc/en-us/articles/23124806855953-Life-cycle)

To accurately reflect your currently active network, **Qatium filters any abandoned and proposed elements from your files**, except for zone layers. To do so, Qatium will rely on the **_lifecycle_** **property**.

If you don’t have the Lifecycle property specified, you can add it to your files as described below.

**Data you add to your files**

| GIS editor |
| ---------- | --------- |
| Field      | Lifecycle |
| Attribute  | Active    |

Abandoned

Proposed|

| EPANET   |
| -------- | --------- |
| Property | Lifecycle |
| Value    | Active    |

Abandoned

Proposed|

**How Qatium processes that data**

Qatium will filter any abandoned and proposed elements, only showing the active ones.

# Why isn't the graph displaying?

Permalink: [Why isn't the graph displaying?](https://help.qatium.com/hc/en-us/articles/23100012837265-Why-isn-t-the-graph-displaying)

Qatium simulates the behavior of each network using the [EPANET toolkit](http://wateranalytics.org/EPANET/), which can raise some errors while it is calculating and/or finishing the simulation process without returning the results for all the hours shown in the timeline.

In the hours when there are results, they will be shown on the map, in the asset details, and in the pressure, flow, and tank autonomy panels. But if for a selected time step there are no available results, the graph in the asset detail will be updated and only show results in the time steps with data.

While the simulation is running, the graph is being calculated and drawn. For very large and complex networks, it might take longer to display the network.

Remember that live data graphs are available only when and where readings are available.

# Uploading GIS files is not working

Permalink: [Uploading GIS files is not working](https://help.qatium.com/hc/en-us/articles/23098907371281-Uploading-GIS-files-is-not-working)

If the GIS file you are trying to upload doesn’t open in a GIS viewer, like QGIS or ArcGIS, please review the error in the viewer to solve it.

If it does, make sure you are uploading all GIS data at once, you can zip all the GIS layers and upload it into Qatium.

Other problems with GIS files could be:

- **No geometry:** all features must have a geometry.
- **No coordinates:** Qatium is a map-based application that needs coordinates to place your network on the map. Remember, we don’t support references to a map file.
- **No asset data:** the minimum asset data required by Qatium is a pipe layer. Make sure your dataset includes at least pipe data.

Still having issues importing your GIS files? Check out:  
[Errors uploading GeoJSON files](https://help.qatium.com/hc/en-us/articles/23098950712593-Errors-uploading-GeoJSON-files)

[Errors uploading Shapefiles](https://help.qatium.com/hc/en-us/articles/23099017335697-Error-uploading-Shapefiles)

# Qatium performance and loading issues

Permalink: [Qatium performance and loading issues](https://help.qatium.com/hc/en-us/articles/23097902028817-Qatium-performance-and-loading-issues)

If you are experiencing performance and/or loading issues with Qatium, you can:

1. Check Qatium’s service status on [this page](https://status.qatium.com/).
2. If everything is ok and the problem persists, check your connection and try again.

None of the above is working? [Contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# Add members to a workspace

Permalink: [Add members to a workspace](https://help.qatium.com/hc/en-us/articles/23071017968017-Add-members-to-a-workspace)

|                  |                                                                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![](https://help.qatium.com/hc/article_attachments/23071112637457)![](https://help.qatium.com/hc/article_attachments/23071129729809)![](https://help.qatium.com/hc/article_attachments/23071112678673) |

If you are the workspace creator or you have an [Owner role](https://help.qatium.com/hc/en-us/articles/23069798983313), you can add new members by following the next steps:

1. Go to _Manage workspace_
2. Enter the email address of the user you wish to add and click on _Add member_

The workspace will appear automatically in the user’s profile, and they’ll be able to interact with the networks within it.

![ADD MEMBER.gif](https://help.qatium.com/hc/article_attachments/23071017963921)

**Important**:  
The creator of the workspace defines roles and can change them at any time directly from the Manage Workspace button.

Users need to be registered on Qatium to add them to a shared workspace.

# Qatium for network monitoring

Permalink: [Qatium for network monitoring](https://help.qatium.com/hc/en-us/articles/23067958440465-Qatium-for-network-monitoring)

## Connect your live data

We highly recommend you **connect your live data** with Qatium to adjust your network. This will allow you to have a **better understanding of the network behavior and improve operations** and emergency responses.

You can upload SCADA, AMI, or any other real-time data by dragging & dropping a CSV file into a network or sending it through our Ingest API.

Learn more about [how to add live data to your network](https://help.qatium.com/hc/en-us/sections/23506948117649-Add-readings-to-your-network).

## Visualize the state of your network

In Qatium, you’ll receive insights just by accessing the platform and when [running scenarios](https://help.qatium.com/hc/en-us/articles/23185903753233-Visualize-insights-results).

Depending on the work mode you are working on, you’ll have an **overview of pressures, flow, and other key information** that helps you understand and improve the state of your network. By using the [Customer Pressure panel](https://help.qatium.com/hc/en-us/articles/23185903753233-Visualize-insights-results#h_01HRETTYS3TQ1Z7S4Q359YVE4B), [Flow panel](https://help.qatium.com/hc/en-us/articles/23185903753233-Visualize-insights-results#h_01HRETZRFWQ9ZHBDDTKVN60Q0N), and [Tank Autonomy panel](https://help.qatium.com/hc/en-us/articles/23185903753233-Visualize-insights-results#h_01HREV30NGDA6E4BF2C7XBN4TA) you can dive deeper into those insights.

**If you have [live data connected](https://help.qatium.com/hc/en-us/sections/23508224778769-Readings-live-data-insights)** to your network and thresholds set to your assets, **you’ll also receive warnings** whenever we detect irregularities in your network. This will help you identify problems quickly and find the best suitable solution.

## Collaborate with your team

Qatium offers you **tools to collaborate with multiple stakeholders** while monitoring your network. [Adding members to a workspace](https://help.qatium.com/hc/en-us/articles/23071017968017-Add-members-to-a-workspace) or [sharing a network](https://help.qatium.com/hc/en-us/articles/23070099691153-Share-a-network) allows everyone to work side-by-side and in real-time on complex operational scenarios.

On the one hand, operators can easily collaborate with each other between the field and the office while having access to the latest information.

They can also collaborate with modelers in a shared environment and on the same task, saving time and resources.

Learn more about [roles and collaboration](https://help.qatium.com/hc/en-us/categories/23069529887761-Roles-collaboration) tools in Qatium.

# What is considered a discoloration risk?

Permalink: [What is considered a discoloration risk?](https://help.qatium.com/hc/en-us/articles/18313555650961-What-is-considered-a-discoloration-risk)

**During normal operations**, to know if there is discoloration risk you have to look at the results of the whole day and **look for the maximum velocity**:

- <0.3 m/s or <0.984252ft/s max velocity cause sedimentation
- From 0.3 to 0.8 m/s or 0.984252 to 2.62467 ft/s max velocity pipes are “self-cleansing”, they don’t accumulate sediments.

And if you are **performing flushing** events:

- From 0.8 to 1.5 m/s or 2.62 to 4.92 ft/s could be a good flushing velocity, but in some cases not enough to remove biofilm
- > 3 m/s or 9.84 ft/s is considered too much speed, which can cause issues in the network
- If there’s a big increase in velocity: from less than 0.2 (max velocity during the day) to 0.8 m/s or 0.66 to 2.62 ft/s) in any direction, it will allow for particle resuspension and could affect discoloration

The flow direction is reversed and the current velocity is >= 0.1m/s or 0.33ft/s

# Do we need to send AMI data to another endpoint?

Permalink: [Do we need to send AMI data to another endpoint?](https://help.qatium.com/hc/en-us/articles/16869134721041-Do-we-need-to-send-AMI-data-to-another-endpoint)

You can **use the Ingest API to send any sensor data**. Qatium will process any flow data sent to a junction as AMI data, and any other data will be processed as SCADA.

If you prefer to send the raw meter readings rather than the flow data, please help us prioritize our upcoming feature releases by [leaving your motivations in our roadmap](https://roadmap.qatium.com/c/239-update-demand-from-ami-amr-data).

# Qatium for regulations

Permalink: [Qatium for regulations](https://help.qatium.com/hc/en-us/articles/24066393670289-Qatium-for-regulations)

We know it’s very important for utilities to **comply with the water regulations** in their regions. With Qatium, you can check your network fire flow capacity, monitor water quality and ensure an adequate water supply across your network both for consumption and emergencies purposes.

**Fire flow capacity**

Ensure that your network has the maximum water supply required for firefighting operations, minimizing the impact on the customers.

[Learn how to check fire flow capacity with Qatium](https://help.qatium.com/hc/en-us/articles/24068465080721)

**Water quality**

Monitor your network water quality to ensure safe drinking water during all operations, and comply with the health-based standards set by regulators.

[Learn how to specify water quality parameters in Qatium](https://help.qatium.com/hc/en-us/articles/23509972952849)

**New development**

Quickly evaluate the impact of new developments and ensure all of your customers have access to water, both at peak times and during emergencies.

# Specify water quality

Permalink: [Specify water quality](https://help.qatium.com/hc/en-us/articles/23509972952849-Specify-water-quality)

Currently, **Qatium only supports water age to calculate Water Quality**. This information can be used to optimize network design and operations, minimize water losses, and improve the efficiency of water treatment processes.

To have accurate water quality data shown in Qatium, you must include the water age parameter in your files for junctions, supply sources and tanks.

**EPANET**

1. Set the _Parameter_ property to _Age_ in the Quality options in EPANET
2. Set the _Initial Quality_ property for all the nodes

![Specify water quality .INP.png](https://help.qatium.com/hc/article_attachments/25192273569681)

**GIS files**

Include the Water Age property inside your GIS data. Then add a number (up to 2 decimal places) representing the number of hours.
|GIS editor|
|---|
|Field|Water Age|
|Attribute||

Learn more about water age and why it’s important in [this article](https://help.qatium.com/hc/en-us/articles/18313412244881-What-is-water-age-and-why-is-it-important).

# Model accuracy

Permalink: [Model accuracy](https://help.qatium.com/hc/en-us/articles/23508751858577-Model-accuracy)

**Model accuracy** is a percentage indicator calculated every hour from the various deviation values of the model. The lower the deviation value, the more accurate the model. The goal is to have an accuracy as high as possible, with the **maximum value being 100%**. However, any value **above 70%** is considered a **good model accuracy**.

![Model accuracy.png](https://help.qatium.com/hc/article_attachments/23508762935185)

# How Qatium integrates your readings

Permalink: [How Qatium integrates your readings](https://help.qatium.com/hc/en-us/articles/23508543530257-How-Qatium-integrates-your-readings)

Depending on the amount and type of data you feed into the API, Qatium processes it to increase the accuracy of your network.

You will then be able to visualize all the available information as the initial state of the network while running scenarios in the platform.

Here you’ll find some important points of the data integration process.

## Asset variable validity and update frequency

Qatium updates asset variables with specific frequencies. Tank levels are used as input for the network only at the first time step of the day: 00:00. **All other variables are propagated up to the end of the day**, provided no asset control interferes with that value.

You can see which variables are updated and with what frequency in the table below:

| Asset variable                | Asset update frequency                            |
| ----------------------------- | ------------------------------------------------- |
| Pump status                   | Every 15 min                                      |
| Pump speed                    | Every 15 min                                      |
| Valve status                  | Every 15 min                                      |
| Valve setting                 | Every 15 min                                      |
| Tank level                    | First time step of the day (e.g. 00:00), everyday |
| Junction demands/Consumptions | Every pattern time step /Every 15 min             |

**Important**:

- Pump and valve controls may reduce the validity period, as the controls might interfere with the readings
- Values are assumed to be in the unit system of the model (only the valueFactor will be taken into account for conversions)

## Time step assignment and missing data

In order to adjust or [compare network performance with real data](https://help.qatium.com/hc/en-us/articles/23508656238865), Qatium maps the live data readings onto the matching hour step of the simulation. For example, readings from 15:00:00 to 15:59:59 will be assigned to hour time step 15.

If there are several readings for the same asset and metric, the most recent reading will be selected.

If there is no data for a time step, the comparison will be disabled for that point of time. In this case, Qatium will show the most recent valid data.

# Element visualization

Permalink: [Element visualization](https://help.qatium.com/hc/en-us/articles/23481157579665-Element-visualization)

Besides pipes, your network may include other elements, such as supply sources, tanks, valves, etc.  
We represent the **type** of each element with an icon. Some icons also represent its **status**.

The following table shows the icons and what they represent.

| Icon                                                                                                                                                                                                                                                                                            | Representation                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| ![supply-source-icon.png](https://help.qatium.com/hc/article_attachments/25196786964497)                                                                                                                                                                                                        | Supply source                                     |
| ![pipe-map-line.png](https://help.qatium.com/hc/article_attachments/25196786977425)                                                                                                                                                                                                             | Pipe                                              |
| ![pipe-unsupplied-map-line.png](https://help.qatium.com/hc/article_attachments/25196757516305)                                                                                                                                                                                                  | Pipe (unsupplied)                                 |
| ![pipe-with-changes.png](https://help.qatium.com/hc/article_attachments/25196787002513)                                                                                                                                                                                                         | Pipe with changes                                 |
| ![pipe-warnings-icon.png](https://help.qatium.com/hc/article_attachments/25196787010705)                                                                                                                                                                                                        | Pipe with issues                                  |
| ![customer-point-map-icon.png](https://help.qatium.com/hc/article_attachments/25196787019281)                                                                                                                                                                                                   | Customer point                                    |
| ![highlighted-asset-icon.png](https://help.qatium.com/hc/article_attachments/23482992483601)                                                                                                                                                                                                    | Highlighted asset                                 |
| ![hydrant-icon.png](https://help.qatium.com/hc/article_attachments/25196787026705)                                                                                                                                                                                                              | Hydrant                                           |
| ![hydrant-warnings-icon.png](https://help.qatium.com/hc/article_attachments/25196787030545)                                                                                                                                                                                                     | Hydrant with issues                               |
| ![inlet-outlet-icon.png](https://help.qatium.com/hc/article_attachments/25196787040785)                                                                                                                                                                                                         | Zone inlet, zone outlet                           |
| ![junction-icon.png](https://help.qatium.com/hc/article_attachments/25196787050769)                                                                                                                                                                                                             | Junction                                          |
| ![junction-warnings-icon.png](https://help.qatium.com/hc/article_attachments/25196787061393)                                                                                                                                                                                                    | Junction with issues                              |
| ![lock-icon.png](https://help.qatium.com/hc/article_attachments/25196757611537)                                                                                                                                                                                                                 | Pipe closed when no valves present in the network |
| ![pump-icon.png](https://help.qatium.com/hc/article_attachments/25196787089169)                                                                                                                                                                                                                 | Pump                                              |
| ![prv-open-icon.png](https://help.qatium.com/hc/article_attachments/25196757635857)                                                                                                                                                                                                             | Regulating valves (PRV) - open                    |
| ![prv-closed-icon.png](https://help.qatium.com/hc/article_attachments/25196787110673)                                                                                                                                                                                                           | Regulating valves (PRV) - closed                  |
| ![prv-partially-open-icon.png](https://help.qatium.com/hc/article_attachments/25196787118225)                                                                                                                                                                                                   | Regulating valves (PRV) / - regulating            |
| ![sensor-no-readings-icon.png](https://help.qatium.com/hc/article_attachments/25196757679505)![sensor-readings-icon.png](https://help.qatium.com/hc/article_attachments/25196787141265)                                                                                                         | Sensor (no readings-readings)                     |
| ![valve-closed-icon.png](https://help.qatium.com/hc/article_attachments/25196757708177)                                                                                                                                                                                                         | Shut-off valve (closed)                           |
| ![valve-open-icon.png](https://help.qatium.com/hc/article_attachments/25196757720977)                                                                                                                                                                                                           | Shut-off valve (open)                             |
| ![valve-partially-open-icon.png](https://help.qatium.com/hc/article_attachments/25196787182097)                                                                                                                                                                                                 | Shut-off valve (partially open)                   |
| ![tank-icon.png](https://help.qatium.com/hc/article_attachments/25196757750801)                                                                                                                                                                                                                 | Tank                                              |
| ![tank-warnings-icon.png](https://help.qatium.com/hc/article_attachments/25196787205393)                                                                                                                                                                                                        | Tank with issues                                  |
| ![valve-low-deviation-icon.png](https://help.qatium.com/hc/article_attachments/25196787210385)![tank-medium-deviation-icon.png](https://help.qatium.com/hc/article_attachments/25196787218577)![hydrant-high-deviation-icon.png](https://help.qatium.com/hc/article_attachments/25196757785617) | Asset with deviation (low, medium, high)          |

# Pressure management

Permalink: [Pressure management](https://help.qatium.com/hc/en-us/articles/23188450723857-Pressure-management)

For networks with pressure zones, ensuring that the customer pressure is within service levels can be a dynamic and tiring exercise. Qatium takes out the busy work.

## Change pressure zone boundaries

With extreme (too high or too low) pressure in a pressure zone in your network, you can decide to test moving the zone boundary to adjust the pressure and find the most suitable solution.

1. Activate _Overview_ in the Work modes ![work-modes-panel-button.png](https://help.qatium.com/hc/article_attachments/25198016326289) panel
2. Go to the zone with the extreme pressure and click on it

![ZONE BOUNDARIES.gif](https://help.qatium.com/hc/article_attachments/23188450692369)

The _Zones_ ![zones-panel-button.png](https://help.qatium.com/hc/article_attachments/25198016330513) panel will show you information about the pressures in that zone, the boundary valves, and the inlets and outlets. From there:

1. Go to the closest boundary valves on the list and click on the marker ![locate-asset-button.png](https://help.qatium.com/hc/article_attachments/25198016335377) to locate it on the map
2. Click on the valve to open it switching the toggle ON ![toggle-on-button.png](https://help.qatium.com/hc/article_attachments/25198016337041)
3. Create another boundary valve, by selecting another valve inside the zone with extreme pressure and switching the toggle OFF ![toggle-off-button.png](https://help.qatium.com/hc/article_attachments/25198016345105)

Repeat step 5 as many times as necessary to recreate a boundary between the two pressure areas.

![ZONE BOUNDARIES_2.gif](https://help.qatium.com/hc/article_attachments/23188450699153)

Now you can check the difference between your network and the scenario using the _Network  
Versions_ ![network-versions-panel-button.png](https://help.qatium.com/hc/article_attachments/25198016353297) panel.

## Change PRV settings

To modulate pressures in your network, you can also try new settings for your PRVs and see how that affects the network.

To update a valve setting:

1. Select a pressure regulating valve (PRV) ![prv-open-icon.png](https://help.qatium.com/hc/article_attachments/25198062361361)
2. Enter the new value
3. Press _Enter_

_![PRV.gif](https://help.qatium.com/hc/article_attachments/23188425057937)_

Now you can check the pressures by switching from _My Scenario_ to _My Network_ in the _Network Versions_ ![network-versions-panel-button.png](https://help.qatium.com/hc/article_attachments/25198016353297) panel.

**Important**:  
Any change applies from the current time step until the end of the day, and when navigating forward or backward in time. Any pre-existing controls in the model will prevail over manual changes.

# Visualize insights & results

Permalink: [Visualize insights & results](https://help.qatium.com/hc/en-us/articles/23185903753233-Visualize-insights-results)

When we talk about insights and results, we refer to key information that helps you solve a problem or improve the state of your network. In Qatium, you’ll receive insights just by accessing the platform and when running scenarios.

Depending on the work mode you are working on, you’ll have an overview of pressures and flow in your network. By using the [_Customer pressure_ panel](https://help.qatium.com/hc/en-us/articles/23185903753233#h_01HRETTYS3TQ1Z7S4Q359YVE4B), [_Flow_ panel](https://help.qatium.com/hc/en-us/articles/23185903753233#h_01HRETZRFWQ9ZHBDDTKVN60Q0N), and [_Tank Autonomy_ panel](https://help.qatium.com/hc/en-us/articles/23185903753233#h_01HREV30NGDA6E4BF2C7XBN4TA) you can dive deeper into those insights.

![INSIGHT PANELS.gif](https://help.qatium.com/hc/article_attachments/23185903642129)

Hover over or click on each element to display [more information](https://help.qatium.com/hc/en-us/articles/23484944676625-Element-insights#h_01HSDT1KT01NV68GTVH94EFD77) about their performance.

![HOVER+CLICK.gif](https://help.qatium.com/hc/article_attachments/23185903644433)

## Customer pressure

On the right side of the map, right below the Search ![search-button.png](https://help.qatium.com/hc/article_attachments/25198529763217) icon, you’ll find a button to **display or hide  
the** **_Customer Pressure_** **panel ![customer-pressure-panel-button.png](https://help.qatium.com/hc/article_attachments/25198529772305)**. If you switch ON and OFF the toggle bar, you’ll activate ![toggle-on-button.png](https://help.qatium.com/hc/article_attachments/25198529775505)  
or hide ![toggle-off-button.png](https://help.qatium.com/hc/article_attachments/25198545877649) the pressure results on the map.

![PRESSURE PANEL.gif](https://help.qatium.com/hc/article_attachments/23185882864913)

The _Customer Pressure_ panel calculates and displays the pressure at the customer points.  
We represent the pressure results on the map with colored hexagons ranging from dark purple to  
light yellow, depending on the average pressure value of all the junctions considered customer points.

![pressure-hexagon-0.png](https://help.qatium.com/hc/article_attachments/25198529800465)![pressure-hexagon-0-10.png](https://help.qatium.com/hc/article_attachments/25198529810321)![pressure-hexagon-10.png](https://help.qatium.com/hc/article_attachments/25198529818001)![pressure-hexagon-20.png](https://help.qatium.com/hc/article_attachments/25198529819281)![pressure-hexagon-30.png](https://help.qatium.com/hc/article_attachments/25198545926929)![pressure-hexagon-40.png](https://help.qatium.com/hc/article_attachments/25198545934225)![pressure-hexagon-50.png](https://help.qatium.com/hc/article_attachments/25198529851153)![pressure-hexagon-60.png](https://help.qatium.com/hc/article_attachments/25198545949201)

Qatium defines an **optimal pressure range for customer points between 20-60 m** (or 30-90 psi in the US system). Whenever any of the customer points has an extreme pressure value (below 20 m or 30 psi or above 60 m or 90 psi), we use that value to color it instead of the average one.

For example:

_Although there could be some customer points within the normal operating range of pressure (46.1m), because there is at least one above 60m Qatium will show it in yellow (the color in the scale used for pressures over 60m)._

You can navigate to the minimum and maximum pressures in the customer points by clicking on the hexagons in the panel. And filter by pressure range using the colored squares.

![Pressure ranges highlighted.png](https://help.qatium.com/hc/article_attachments/23185882884881)

**Important**:  
If a hexagon contains customer points both below and above the optimal pressure range, we give priority to pressures below the minimum.

The hexagons will change in size when zooming in or out, allowing you to identify better the higher/ lower pressures’ locations.

## Flow

Below the _Customer Pressure_ panel ![customer-pressure-panel-button.png](https://help.qatium.com/hc/article_attachments/25198529772305) button, you’ll find a button to **display or hide the** **_Flow_** **panel ![flow-panel-button.png](https://help.qatium.com/hc/article_attachments/25198545954577)**. If you switch ON and OFF the toggle bar, you’ll activate ![toggle-on-button.png](https://help.qatium.com/hc/article_attachments/25198529775505) or hide ![toggle-off-button.png](https://help.qatium.com/hc/article_attachments/25198545877649) flow on the map.

![FLOW PANEL.gif](https://help.qatium.com/hc/article_attachments/23185903708561)

The **_Flow_** **panel** shows not only the distribution of flow across the network but also the total length of pipes with that flow range.

## Tank autonomy

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198529878289)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198545972241)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198545982353) |

On the right side of the map, you’ll find the **_Tank Autonomy_** **panel** ![tank-autonomy-panel-button.png](https://help.qatium.com/hc/article_attachments/25198545994257) button. When running scenarios, you can use it to **visualize** an estimation of the hours your tanks will supply the network if there’s a supply interruption, allowing you to be prepared for any incident.

![TANK AUTONOMY PANEL.gif](https://help.qatium.com/hc/article_attachments/23185882908049)

You can also **combine the tank autonomy estimation with other operations** such as Demand Spike or Shutdown to verify how your tanks will behave under different scenarios (isolation from the main supply, pipe breakages, surges in demand, etc.).

You can verify the behavior of your tanks throughout the day [moving along the timeline](https://help.qatium.com/hc/en-us/articles/23478267340561-Timeline-controls).

## Zones

|                  |                                                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198545972241)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25198545982353) |

The _Zones ![zones-panel-button.png](https://help.qatium.com/hc/article_attachments/25198545999505)_ panel allows you to display ![toggle-on-button.png](https://help.qatium.com/hc/article_attachments/25198529775505) or hide ![toggle-off-button.png](https://help.qatium.com/hc/article_attachments/25198545877649) the zones on the map.

![ZONES TOGGLE.gif](https://help.qatium.com/hc/article_attachments/23456791492241)

If you click on a zone, you’ll also see some useful insights in the panel:

- **Zones pressures**, where you find:
  - The number of **customer points with low pressure**: less than 20 m for international system networks and less than 30 psi for US customary networks.
  - The number of **junctions with high pressure**: more than 60 m for international system networks and more than 90 psi for US customary networks.
- A list of the zone **boundary valves**, pretty useful when [changing pressure zones boundaries](https://help.qatium.com/hc/en-us/articles/23188450723857-Pressure-management#h_01HREZEP985G5PF8BYY8VWWCEX).
- **Inlets and outlets** in each sector. This will help you understand how the DMAs are supplied and notice if any value is outside the expected range.

![Zones panel.png](https://help.qatium.com/hc/article_attachments/23456775325713)

Hovering over or clicking the zone, you’ll receive information about:

- **Minimum** and **maximum zone pressures**: of all the junctions in the zones.
- **Minimum** and **maximum customer point pressure**
- **Total customer points** in the zone
- **Graphs** for pressure insights

![Zones popover & tooltip.png](https://help.qatium.com/hc/article_attachments/23456791503761)

If you have live data connected to your zones, Qatium will also provide useful insights on **net flow** and **efficiency**. Learn more about zones live data insights in [this article](https://help.qatium.com/hc/en-us/categories/23506850128273-Readings-live-data).

# How Qatium infers roughness values

Permalink: [How Qatium infers roughness values](https://help.qatium.com/hc/en-us/articles/23183182648337-How-Qatium-infers-roughness-values)

## Roughness based on material

If the installation date can’t be found, Qatium will infer the roughness based on material only.

| Material                                    | HW  | CM     | DW      |
| ------------------------------------------- | --- | ------ | ------- |
| AC: Asbestos Cement                         | 140 | 0.011  | 0.10000 |
| ARO: Abrasion Resistant Outerwrap           | 148 | 0.0148 | 0.14800 |
| CI: Cast Iron                               | 130 | 0.012  | 0.80000 |
| COPP: Cooper                                | 130 | 0.011  | 0.10000 |
| CWOSMJ: Concrete Without Sheet Metal Jacket | 140 | 0.011  | 0.18    |
| CWSMJ: Concrete With Sheet Metal Jacket     | 135 | 0.013  | 0.36000 |
| DI: Ductile Iron                            | 130 | 0.012  | 0.30000 |
| DIL: Lined Ductile Iron                     | 130 | 0.0148 | 0.25000 |
| FE: Iron                                    | 148 | 0.0148 | 0.14800 |
| GI: Galvanized Iron                         | 120 | 0.016  | 0.15000 |
| GIL: Lined Galvanized Iron                  | 120 | 0.0148 | 0.15000 |
| HDPE: High Density Polyethylene             | 150 | 0.009  | 0.01000 |
| L: Lead                                     | 140 | 0.011  | 0.01000 |
| LDPE: Low Density Polyethylene              | 150 | 0.009  | 0.01000 |
| MDPE: Medium Density Polyethylene           | 150 | 0.009  | 0.01000 |
| NA: Not available                           | 150 | 0.0148 | 0.14800 |
| PC: Prestressed Concrete                    | 150 | 0.011  | 0.18000 |
| PE: Polyethylene                            | 150 | 0.009  | 0.01000 |
| PE80: Polyethylene 80                       | 150 | 0.009  | 0.01000 |
| PE100: Polyethylene 100                     | 150 | 0.009  | 0.01000 |
| PVC: Polyvinyl Chloride                     | 150 | 0.009  | 0.05000 |
| PVCO: Orientated PVC                        | 150 | 0.0148 | 0.05000 |
| RC: Reinforced Concrete                     | 140 | 0.0148 | 0.18    |
| S: Steel                                    | 150 | 0.0148 | 0.10000 |
| SI: Spun Iron                               | 150 | 0.0148 | 0.60000 |
| SS: Stainless Steel                         | 150 | 0.011  | 0.14800 |
| UNK: Unknown                                | 148 | 0.0148 | 0.14800 |
| UPVC: Unplasticized PVC                     | 150 | 0.009  | 0.05000 |

## Roughness based on installation date

The value calculated from the material will then be amended based on the pipe’s age, i.e. the number of years since its installation date.

Depending on the head loss formula applied, this is how this works:

**H-W**: InferredRoughness = Roughness(material)\*(1-Age/180)  
Value range: \[50 ;+∞\]

**D-W**: InferredRoughness = Roughness(material)/(1-Age/180)Value range: \[0.05 ; 50\]

**C-M**: InferredRoughness = Roughness(material)/(1-Age/180)

Value range: \[0 ; 0.05\]

**What if the resulting roughness value is out of range?**

Qatium would use the value of the range limit for the corresponding headloss formula.  
E.g. For H-W, if the value calculated is _40_, the inferred value would be _50_.

# Customer points

Permalink: [Customer points](https://help.qatium.com/hc/en-us/articles/23156554634513-Customer-points)

If your network includes [laterals](https://help.qatium.com/hc/en-us/articles/23125169946257), you can also add customer points, even if they are not directly connected to them.

Adding customer points to your network is very useful, as it allows you to:

- See the **impact of an operation on the customers**, when [running scenarios](https://help.qatium.com/hc/en-us/articles/16923150046097-Watermain-shutdown#h_01HAKYAC3MRKKRZK7Y6HFEJ6XB)
- Visualize **customer consumption**
- Add consumption info to the simulation to **improve the accuracy of the network**
- Get [**Water balance**](https://help.qatium.com/hc/en-us/articles/23509223955089-Zones)[**insights**](https://help.qatium.com/hc/en-us/articles/23509223955089-Zones), especially related to efficiency

**You can add customer points to your network through EPANET, GIS files or CSV files**, following the specifications below. Qatium will process that information by running some validation checks and we’ll try to fill any gaps.

Learn more about how Qatium works in [this article](https://help.qatium.com/hc/en-us/articles/23063998429585).

**EPANET and GIS editors**

**Data you add to your files**

| GIS editor |
| ---------- | -------- |
| Field      | Group    |
| Attribute  | customer |

| EPANET   |
| -------- | ----------- |
| Property | Description |
| Value    | customer    |

**Tip from Q**:  
Download the [GIS file example](https://help.qatium.com/hc/article_attachments/25602012303121) in the additional resources for a demo of the data to include.

You can also specify hydrants directly in the .inp file using a text editor. Edit the file including the group in the description or in the extra properties column that appears on fifth position. Example: 25_35\_\_customer;aDescription

**How Qatium processes that data**

If not specified: it will remain as a junction.

**CSV files**

You can export all the relevant data as a CSV file and then upload it directly to Qatium. There is no specific format required for your file but **it should include longitude and latitude values**, allowing Qatium to determine the coordinates.
**Tip from Q**:  
Download the [CSV template](https://help.qatium.com/hc/article_attachments/25602012310033) in the additional resources for a demo of the data to include.

From here on, Qatium takes charge of transforming the data so that you can see them in your network. Here’s how this works:

1. We establish **element IDs** by searching for columns with unique values and selecting the first one.
2. Then apply the default GIS **projection** (WGS84).

You can **add several points in the same coordinates** and we will take care of distributing them so that you can access the results of each one.

If you download the network as .inp from Qatium, we’ll keep all the customer points but we’ll move them to their original position.

If you import that file again, it’ll all go back to the same place as before downloading the network.

**Important**:  
Qatium considers all junctions with assigned or live demands to be customer points. If no demand is specified, they remain junctions.

A hydrant can also be a customer point at the same time, but hydrants will have priority on classification and visualization.

## Resources

# Why is the assigned demand different from consumption?

Permalink: [Why is the assigned demand different from consumption?](https://help.qatium.com/hc/en-us/articles/23100035482129-Why-is-the-assigned-demand-different-from-consumption)

The assigned demand would be the same as the requested demand, and the consumption would result from the simulation.

Those can differ:

1. For a Pressure-Driven Analysis: in this case, water demand dynamically adjusts according to current pressure levels, reducing gradually under a specified threshold and ceasing entirely below a critical cutoff to avoid negative pressures in the network.
2. When performing a scenario where the demand cannot be met.

_E.g.: when a tank empties and cannot provide the assigned demand._

# Errors uploading GeoJSON files

Permalink: [Errors uploading GeoJSON files](https://help.qatium.com/hc/en-us/articles/23098950712593-Errors-uploading-GeoJSON-files)

Please check the most common GIS errors by reading [this article](https://help.qatium.com/hc/en-us/articles/23098907371281-Uploading-GIS-files-is-not-working). If the problem persists, it might be:

- **The GeoJSON file doesn’t contain projection information**. If that’s the case, make sure each file contains it (e.g. "crs": { "type": "name", "properties": { "name": "urn :ogc: def :crs: EPSG::2326" } }) and try again.
- **The coordinates don't match the projection information**. We recommend opening the files in your GIS software, such as QGIS or ArcGIS, assigning the correct projection and resaving the files.

If the problem persists, [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# My workspace or network has disappeared

Permalink: [My workspace or network has disappeared](https://help.qatium.com/hc/en-us/articles/23098125008401-My-workspace-or-network-has-disappeared)

Your workspaces and networks won’t disappear unless anyone deletes them. If you can’t find a workspace or a network, make sure anyone in your team hasn’t deleted it.

If you are experiencing connection issues or have a limited connection, try reloading the page or coming back later when you have a better connection.

If the problem persists, [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# Change the role of a member

Permalink: [Change the role of a member](https://help.qatium.com/hc/en-us/articles/23071271258385-Change-the-role-of-a-member)

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197391826961)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197408297617)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197408299409) |

By default, the person who creates the workspace gains an [Owner role](https://help.qatium.com/hc/en-us/articles/23069798983313). The people added by the Owner will have, initially, a [Member role](https://help.qatium.com/hc/en-us/articles/23069798983313).

To change the role of any person within the workspace, you just have to:

1. Go to the _Manage Workspace_ button
2. Find the person you want to change the role for
3. Select the role of your choice from the drop-down menu ![dropdown-button.png](https://help.qatium.com/hc/article_attachments/25197408306577)

![CHANGE ROLE.gif](https://help.qatium.com/hc/article_attachments/23071301469969)

# Upload your network

Permalink: [Upload your network](https://help.qatium.com/hc/en-us/articles/23064699184785-Upload-your-network)

Uploading your network into Qatium is very easy.

- If you already have a hydraulic model, you can simply **upload the EPANET input file (.inp)**
- If you don’t: **upload your GIS data** and we’ll create the model for you

You can also combine datasets using both GIS files and a model (.inp).

Use the _Upload_ ![Upload_Button](https://help.qatium.com/hc/article_attachments/23064683025297) button or drag & drop your files directly into the platform, and your network will be created within seconds.![Upload options.png](https://help.qatium.com/hc/article_attachments/23064699178129)

![UPLOAD INP.gif](https://help.qatium.com/hc/article_attachments/23064969188113)

These are the files & formats supported by Qatium:

- CSV–for [readings](https://help.qatium.com/hc/en-us/articles/23507245352721) and [customer points](https://help.qatium.com/hc/en-us/articles/23156554634513).
- EPANET (.inp)–Qatium only supports **a single .inp file at a time**,  
  otherwise we’ll process the first one and ignore the rest.
- GIS files
  - GeoJSON
  - Shapefiles

**Tip from Q**:  
We've created examples of the main files you can upload into Qatium. Check the [additional resources](https://help.qatium.com/hc/en-us/articles/25599759805713) for a demo of the data to include.

To **make the most out of Qatium**, here’s what we recommend for your network:

- Upload **as many elements as possible** to gain more practical insights.
- [Set the network projection](https://help.qatium.com/hc/en-us/articles/23509780309649-Set-the-network-projection) to ensure that its location on the map is accurate.
- [Connect live data](https://help.qatium.com/hc/en-us/articles/23510154807185-Add-network-readings) so that it closely reflects the latest state of the physical network.
- [Set water quality parameters](https://help.qatium.com/hc/en-us/articles/23509972952849-Specify-water-quality) to optimize design and operation, minimize water losses,  
  and make water treatment processes more efficient.

We know that sometimes there might be some information missing, so we came up with a method to create the most complete version of your network–even if you don’t have all the data available. Read [this article](https://help.qatium.com/hc/en-us/articles/23063998429585) to learn more about how Qatium works.

Visit the following articles for more details:

- [How to edit element properties in your files](https://help.qatium.com/hc/en-us/articles/23513322177041-Edit-element-properties)
- [Editing network elements](https://help.qatium.com/hc/en-us/categories/23123485977745-Editing-network-elements)
- [Best practices](https://help.qatium.com/hc/en-us/sections/23489540940433-Best-practices)

# Where does the elevation data come from?

Permalink: [Where does the elevation data come from?](https://help.qatium.com/hc/en-us/articles/16869337227153-Where-does-the-elevation-data-come-from)

If your dataset doesn’t contain elevations, Qatium infers your asset elevations. The elevation comes from [Mapbox elevation data](https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/).

# Can I retrieve, delete or update data through the API?

Permalink: [Can I retrieve, delete or update data through the API?](https://help.qatium.com/hc/en-us/articles/16869161922961-Can-I-retrieve-delete-or-update-data-through-the-API)

Currently, our Ingest API is **append-only**. This means that Qatium will use the latest received value for each timestamp sent. If you wish to delete part or all of the data you submitted through the Ingest API, [please contact Q](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# How much does Qatium cost?

Permalink: [How much does Qatium cost?](https://help.qatium.com/hc/en-us/articles/16867970370961-How-much-does-Qatium-cost)

Qatium operates on a **freemium model**, which means that you can use the core functionalities of the platform for free. However, depending on your specific needs, you can also upgrade to one of our paid plans: Pro, Business or Enterprise.

For more information, visit our [pricing page](https://qatium.com/pricing/).

# Delete your account

Permalink: [Delete your account](https://help.qatium.com/hc/en-us/articles/16164475903249-Delete-your-account)

To delete your account, please [contact Q](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

If you have shared workspaces, you'll have to specify if you’d like to delete them.

Once deleted, you won’t be able to recover the data previously held in that account.

# Fire flow capacity

Permalink: [Fire flow capacity](https://help.qatium.com/hc/en-us/articles/24068465080721-Fire-flow-capacity)

Fire flow determines the **water supply required for firefighting operations**. In such situations, regulators typically establish guidelines to guarantee enough water pressure for customers while ensuring ample supply for firefighters’ needs.

Without an adequate water supply, they may struggle to control a fire or customers end up without water, resulting in extensive damages.

With Qatium, you can **check the maximum amount of water firefighters can extract from the hydrants** in your network **without reducing pressures on the customers** below the regulation threshold.

1. Select the time at which you’d like to test your fire flow capacity. For example, select 00:00 to test for the whole day.
2. Click on a hydrant ![hydrant-icon.png](https://help.qatium.com/hc/article_attachments/25197986755601) (use the search ![search-button.png](https://help.qatium.com/hc/article_attachments/25197986760337) to locate it faster)
3. Go to the _Pressure_ tab in the Demand Spike panel ![demand-spike-panel-button.png](https://help.qatium.com/hc/article_attachments/25197986766865) and type the minimum pressure value customers can reach according to regulations (or use the slider).
4. Hover over or click on the DMA to confirm no customers are below the minimum pressure.
5. Open the Pressure panel ![customer-pressure-panel-button.png](https://help.qatium.com/hc/article_attachments/25198002969489) and check the lowest customer pressure on the network.
6. Use the fast-forward ![fast-forward-button.svg](https://help.qatium.com/hc/article_attachments/25887797222289) button to move through the timeline and see the impact throughout the day.

![FIRE FLOW.gif](https://help.qatium.com/hc/article_attachments/24068432149265)

You can switch from _My scenario_ to _My network_ in the Network versions panel ![network-versions-panel-button.png](https://help.qatium.com/hc/article_attachments/25198002973457) to assess differences.

**Tip from Q**:  
Select the pressure ranges below your target pressure to quickly visualize customers with critically low pressure. E.g.: selecting all pressure ranges below 15m (or 20psi) will highlight all the customers in with these pressure ranges.

# Upload background layers

Permalink: [Upload background layers](https://help.qatium.com/hc/en-us/articles/23509867325329-Upload-background-layers)

If you are a [network Owner](https://help.qatium.com/hc/en-us/articles/23069891400977-Roles-in-networks), you can add a layer containing any kind of geometry to your network. This can be useful to display critical buildings, labels etc.

In order to do so, you need to:

1. [Contact Q](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=18105710051857)
2. Attach your files (Shapefiles or GeoJSON) to the contact form

Once you've added it, you'll be able to see the new layer in the background of your network in a blue shade.

For example, buildings would show like this:

![](https://help.qatium.com/hc/article_attachments/23509867317393)

# Adjust live demands

Permalink: [Adjust live demands](https://help.qatium.com/hc/en-us/articles/23509064118161-Adjust-live-demands)

There are 2 ways to modify demands with live data:

- Directly uploading live demands through the Ingest API;
- Adjusting them according to the flowmeter readings. This is only possible when each zone includes the following information:
  - Customer points
  - Flowmeter readings
  - Zone name/ID
  - Inlet/Outlet IDs

The adjustment is made every 15 minutes, distributing the net flow (inlet readings minus outlet readings) of the zone (DMA) among its customer points. The distribution is made taking into account the demand of the base version of the network in each step. This means that junctions that originally had no demand assigned will remain so after the adjustment.

Learn how to specify the information above [in this article](https://help.qatium.com/hc/en-us/articles/23182710465937-Zones).

#### Edge cases of junction demands/consumptions

- **Flowmeter readings every 15 minutes + patterns every 1 hour:**We only use the flow readings for every hour. The values delivered in other 15-minute time steps are discarded.

- **Pattern step < 15 minutes**The pattern values are completed.  
  For example: If we have live demands at 00:00, 00:15, 00:30 etc, then:  
  → the value from 00:00 is assigned to pattern values to 00:00, 00:05, 00:10, etc.  
  → the value from 00:15 is assigned to the pattern values to 00:15, 00:20, 00:25.  
  etc.

- **Negative real consumptions**No adjustment made.

- **Flowmeter has no value in a step**No adjustment made in this step for that DMA.

# Warnings

Permalink: [Warnings](https://help.qatium.com/hc/en-us/articles/23508980014481-Warnings)

As soon as the platform receives your live data, Qatium will analyze and process it to find relevant events like:

- **Tank levels** (unusually low)
- **Junction pressures** (unusually low)
- **Pipe flows** (unusually high)

You can set thresholds (minimum and maximum values) for those variables in your assets when importing your files.  
Here’s how:

| GIS editor |
| ---------- | --------------------------------------- |
| Field      | WarningThresholdMin WarningThresholdMax |
| Attribute  |                                         |

| EPANET   |
| -------- | -------------------------------------------------- |
| Property | Description                                        |
| Value    | \_\[WarningThresholdMin\]\_\[WarningThresholdMax\] |

Example: _\_1.2_12.5_|

Threshold values in .inp files should **follow the existing order** on the description. Use an underscore to separate each value.

For example, for a pipe with the following data:

- - Material: DI
  - Installation date: 2024-07-12
  - Threshold Min: 1.2
  - Threshold Max: 12.5

The value in the description should be **_DI_2024-07-12_1.2_12.5_**

If we don’t have the material data, for example, the description then would be _\_2024-07-12_1.2_12.5_

Make sure the **units for the threshold values match the units of the variable** we're setting the warnings to:

- - Pipe flow > flow unit
  - Tank level > level unit
  - Junction pressure > pressure unit

These values will then be compared with the live data. If the data received is below, or above the thresholds, we’ll let you know.

- The affected networks will have a _Warnings_ badge. If you click on it, it will take you to the time of the warning in the network.
- There will be _Warning_![warning-icon.png](https://help.qatium.com/hc/article_attachments/25197754363793) icons on the date picker and on specific dates in the calendar
- The time affected in the timeline will be in orange and have a _Warning_![warning-icon.png](https://help.qatium.com/hc/article_attachments/25197754363793) icon

![Warnings overview.png](https://help.qatium.com/hc/article_attachments/23508990315665)

While inside the network, you’ll be able to see further details about the warnings:

- The icon of the affected asset will be bigger and orange
- If you zoom in closer, pipes with warnings will be also represented with an orange line
- You’ll see the cause of the warning when hovering over or clicking the asset

![Warnings insights popover.png](https://help.qatium.com/hc/article_attachments/23508990316817)

**Important**:

By default, if the data received exceed the threshold values **for less than 1 hour** we won't display any warning.

# Element search

Permalink: [Element search](https://help.qatium.com/hc/en-us/articles/23483897896849-Element-search)

You can quickly locate any of your network elements, regardless of whether you know the exact element ID or not.

To do so, use the **element search** panel. You can search by **element ID** or by element **address/location**, depending on the information you have available.

### Element search by ID

1. Click on the magnifying glass ![Search.png](https://help.qatium.com/hc/article_attachments/27153448778129) button
2. In the search bar, start typing the element ID. After entering the first 3 characters, a drop-down list with suggestions will appear.
3. Select the correct one.

![element-search-ID.png](https://help.qatium.com/hc/article_attachments/27153479806481)

### Element search by address/location

1. Click on the magnifying glass ![Search.png](https://help.qatium.com/hc/article_attachments/27153448778129) button.
2. In the search bar, start typing the address where the element is located. You can enter the exact address (number, street name etc.) or just the street name. After entering the first 3 characters, a drop-down list with suggestions will appear.
3. Select the correct one.

![element-search-address-ES.png](https://help.qatium.com/hc/article_attachments/27153448790417)

### Search completed

Once you’ve made your selection, you’ll be automatically redirected to the element or address you were looking for.

From there and with the search panel still open, you can:

- Switch the toggle ON to highlight the element you located.
- Use the funnel ![funnel.png](https://help.qatium.com/hc/article_attachments/27153479826577) button to look for nearby elements and visualize how they interact in a specific area of your network. With the toggle ON, all selected elements will be highlighted.

![search-funnel-EN.gif](https://help.qatium.com/hc/article_attachments/27153479832721)

**Important**:  
The search provides a **maximum of 5 suggestions**. If the element you are looking for does not appear, try completing the name even further to narrow down the suggestions.

# Discarding overlapping nodes

Permalink: [Discarding overlapping nodes](https://help.qatium.com/hc/en-us/articles/23183347770257-Discarding-overlapping-nodes)

When there are overlapping nodes (nodes with the same coordinates, with a 0.05 m tolerance), **only the first element** is preserved, according to the following **order of priorities**:

1. SUPPLY SOURCE
2. TANK
3. PUMP
4. VALVE
   1. PRV
   2. PSV
   3. FCV
   4. PBV
   5. GPV
   6. TCV

In case a **Customer point overlaps with a Hydrant**, the Hydrant will be preserved and the Customer point will be connected with a lateral to that hydrant.

**Important**:

If a preserved node has no Elevation property, it is obtained from the first discarded node that contains that information.

Demands are only preserved if the preserved node is a junction. If a junction with assigned demands overlaps with a valve, it will be displaced 0.5m away from that valve and over the pipe it belongs to. This way, the demands are not lost.

# Supply sources

Permalink: [Supply sources](https://help.qatium.com/hc/en-us/articles/23158825990929-Supply-sources)

If you don’t have the data for supply sources or it’s invalid, **Qatium will infer the location of the source** following these steps:

1. Qatium divides the network into subnetworks.
2. Then check the most dense one for a supply source.
3. If it doesn't contain a supply source, we infer it at the end node with the highest elevation of the pipes with the largest diameter.

If the simulation cannot run with the defined source, Qatium will try to infer the location of an additional source.

**Total head**

- From **GIS files**, Qatium only admits the Head property. In case the Head is not defined in the GIS files, we set a default value: Head = 30.
- For **.inp files**, according to [EPANET’s specifications](https://epanet22.readthedocs.io/en/latest/6_objects.html#table-reservoir-prop), the total head will always be elevation + pressure head. In the rare case the Total Head property from the .inp file is 0, we’ll get the elevation from [Mapbox elevation data](https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/) and we’ll set Head to 30.

**Head pattern**

For some cases, Qatium can infer the supply source’s head pattern from a pressure reading next to it, leading to a more accurate model.

Here’s how it works: whenever a network has **valid pressure readings** next to a supply source, Qatium uses the pressure values of the closer one to build an inferred head pattern for the related supply source.

We consider a pressure reading is valid for a supply source when:

- Is set on a junction element
- Is 50m of pipe length or closer to the supply source
- There is no element between it and the supply source different from pipes or junctions

**Important**:  
When any required reading is not available, the **head value will serve as the default for the pattern**. If there are multiple valid pressure readings sit exactly at the same distance of the supply source, we’ll use the first one – in alphabetical order based on the asset ID – to build the pattern.

**Terrain elevation**

Qatium only processes elevation data when it's included as an attribute in point assets like junctions, tanks, supply sources, valves, and pumps.

**Data you add to your files**

| GIS editor |
| ---------- | --------- |
| Field      | Elevation |
| Attribute  |           |

| EPANET   |
| -------- | --------- |
| Property | Elevation |
| Value    |           |

**How Qatium processes that data**

If not specified: Qatium will add it from [Mapbox elevation data](https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/).

**Water quality**

Currently, **Qatium only supports water age to calculate Water Quality**. To have accurate water quality data shown in Qatium, you must include the water age parameter in your files.
**EPANET**

1. Set _Parameter_ property to _Age_ in the Quality options in EPANET
2. Set the _Initial Quality_ property for all the nodes

![Specify water quality .INP.png](https://help.qatium.com/hc/article_attachments/23158973728273)
**GIS files**

Include the Water Age property inside your GIS data. Then add a number (up to 2 decimal places) representing the number of hours.

| GIS editor |
| ---------- | --------- |
| Field      | Water Age |
| Attribute  |           |

![supply-sources-water-age.png](https://help.qatium.com/hc/article_attachments/26065083473553)

# Why is my pipe not being shut?

Permalink: [Why is my pipe not being shut?](https://help.qatium.com/hc/en-us/articles/23100123717137-Why-is-my-pipe-not-being-shut)

If you are trying to perform a shutdown on a pipe representing a check valve, and Qatium doesn’t find any shut-off valves, we won’t be able to continue with the operation.

# Error uploading Shapefiles

Permalink: [Error uploading Shapefiles](https://help.qatium.com/hc/en-us/articles/23099017335697-Error-uploading-Shapefiles)

Qatium requires the upload of **all the Shapefiles**. This includes the **.shp, .shx, .dbf and .prj** files. Please note that some modeling packages do not create a .prj file when exporting data to Shapefiles.

If all the required files are present, the problem might be that **all files of the same layer don't have the same name**. For each layer there must be one file per extension with the same name.

E.g.: for the layer _example_ there must be the following files: example.shp, example.dbf, example.shx, example.prj

If the problem persists, [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# I can't sign in

Permalink: [I can't sign in](https://help.qatium.com/hc/en-us/articles/23098163810833-I-can-t-sign-in)

To sign in into Qatium you just need to follow these steps:

1. Go to [https://qatium.com/](https://qatium.com/)
2. Select _Sign in,_ enter your e-mail address, and click _Continue_
3. We'll send you a one-time code to your e-mail. Use it to confirm your login, and you’re in!

If you are experiencing some trouble signing in:

- Make sure you have signed up to Qatium before. If not, you can learn how to set up your account by reading [this article](https://help.qatium.com/hc/en-us/articles/16164055312785-Sign-up).
- Check your spam folder if you haven’t received the login code.
- Make sure your e-mail address is correct.

None of the above is working? [Contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# Remove members from the workspace

Permalink: [Remove members from the workspace](https://help.qatium.com/hc/en-us/articles/23071483712017-Remove-members-from-the-workspace)

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197353923217)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197337415697)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197353931153) |

Whenever you need to remove any user from your workspace, you just have to:

1. Go to _Manage workspace_
2. Find the member you want to remove from the list
3. Choose _Remove_ using the dropdown menu ![dropdown-button.png](https://help.qatium.com/hc/article_attachments/25197337426577)
4. Confirm the action by clicking on _Remove member_

![REMOVE WS MEMBER.gif](https://help.qatium.com/hc/article_attachments/23071493548561)

**Important**:  
You can always add a user back to a workspace by following the [steps in this article](https://help.qatium.com/hc/en-us/articles/23071017968017).

# Demo network

Permalink: [Demo network](https://help.qatium.com/hc/en-us/articles/23065292217233-Demo-network)

To introduce you to Qatium, we've created a **demo network** named _Magnetic Island, AU - Demo_. It **includes many elements** you could find in your own network: hydrants, pipes, pumps, tanks...  
It’s a great network to explore all the functionalities before importing your own.

![Demo network highlighted.png](https://help.qatium.com/hc/article_attachments/23065308454417)

Once you access the Demo network, you’ll find a map that represents the current state of the hydraulic model for Magnetic Island. There you can explore all the features that Qatium offers and get to know the platform. In the image below, you’ll find a quick guide. You can dive deeper into the interface by visiting our [Navigation guides](https://help.qatium.com/hc/en-us/categories/23456257693585-Navigation-guides).

![Demo network.png](https://help.qatium.com/hc/article_attachments/23065292209937)

You can delete the demo model when you are ready to use your own networks, but be sure you don’t need it anymore: once deleted, it will not appear again in your workspace.

# How is model accuracy calculated?

Permalink: [How is model accuracy calculated?](https://help.qatium.com/hc/en-us/articles/18313761375505-How-is-model-accuracy-calculated)

Model accuracy is calculated by averaging the values of flow, pressure and tank volume deviations.

- The minimum value of model accuracy is **0%** and means **bad performance**: the average of deviations is above 100%
- The maximum value of model accuracy is **100%** and means **outstanding performance**: the average of deviations is 0%
- Message _Model accuracy N/A_ (not available) means that there are no readings for the current timestep, or the SCADA or AMI data is not connected to the network.

The model accuracy value is calculated as:

![SCR-20240320-nsat.png](https://help.qatium.com/hc/article_attachments/23491564449169)

m: magnitude (flow, pressure, tank volume)

M: number of different magnitudes available

# Do you accept the "epoch time" format?

Permalink: [Do you accept the "epoch time" format?](https://help.qatium.com/hc/en-us/articles/16869201205521-Do-you-accept-the-epoch-time-format)

**Yes**, we do! We accept epoch time format, if that’s your preferred flavor. Epoch times will always be considered UTC.

We **also accept ISO8601 format**, which allows you to include the time zone in the time variable, e.g. _2024-02-29 03:00:00+10_

# How can I learn using Qatium?

Permalink: [How can I learn using Qatium?](https://help.qatium.com/hc/en-us/articles/16868005422353-How-can-I-learn-using-Qatium)

At Qatium, we go to great lengths to make our platform as intuitive and easy to use as possible.

To make your learning curve even smoother, we’ve built a **comprehensive** **Help Center** where you can find the answers to your questions, organized in a clear and straightforward manner.

To get an overview of the basics, start by **visiting the**[**Get started**](https://help.qatium.com/hc/en-us/categories/16162825064849-Get-started) **section**.

# Update your network

Permalink: [Update your network](https://help.qatium.com/hc/en-us/articles/23512027218321-Update-your-network)

Keeping your network updated allows you to have a more accurate representation of the physical network. Regardless of the file type you used to create your network, you can easily update it anytime.  
The process is almost the same as when you create a new network, but you need to be inside the network you want to update (instead of the workspace view).

## EPANET (.inp) file

You can replace the existing EPANET file with a new one at any time. Just drag & drop the new file into the interface.  
You can also combine existing GIS files with an EPANET model, and drag & drop the new file into the interface.

**Important**:  
If you upload a new EPANET file to a network that includes GIS layers, all existing layers will be marked as _ignored_, except for zone layers.

## GIS files

You can update your GIS layers:

- **Replacing** **the existing layers** with new ones: in this case, the new files should have exactly the same names as the existing ones.
- **Adding** **new layers** to the existing ones: the files should have different names from the existing ones.

You have 2 options to add or replace your layers:

- Drag & drop them into the interface
- Click on the _Network layers_![network-layers-panel-button.png](https://help.qatium.com/hc/article_attachments/25197589211153) icon and then _Add data_

_![UPDATE NETWORK.gif](https://help.qatium.com/hc/article_attachments/23512187321233)_

**Tip from Q**:  
Upload all your valves, hydrants, customer points and zones to get the most out of Qatium!

**Important**:  
Updating your network may involve editing the element properties.  
Learn more [here](https://help.qatium.com/hc/en-us/categories/23123485977745-Editing-network-elements).

Qatium will do its best to recognize and assign asset types to each imported layer, but in some cases, layers might be ignored or misassigned. Q will let you know if that’s the case.

You can recategorize your layers – reassign data to a different type of layer – or ignore any of them by clicking on the _Network layers_ ![network-layers-panel-button.png](https://help.qatium.com/hc/article_attachments/25197589211153) icon.

![RECATEGORIZE LAYERS.gif](https://help.qatium.com/hc/article_attachments/23512382308881)

**Important**:  
– Recategorizing and ignoring network layers entail changes not only to the view but also to the structure and performance of your network. Before applying any changes, Q, your digital assistant, will pop up and ask you to confirm that you want to go ahead, just in case.  
– You’ll need to be a network or workspace owner to make recategorizations.

# Zones

Permalink: [Zones](https://help.qatium.com/hc/en-us/articles/23509223955089-Zones)

|                       |                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Plan availability** | ![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197783032977)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197795290769) |

If you have live data connected and delimited zones in your network, Qatium will provide useful insights on [Water balance](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK64TCSZVSNNWY4M6FHDA6H) so that you can improve it.

You can easily evaluate if there’s an abnormally high amount of [non-revenue water (NRW)](https://help.qatium.com/hc/en-us/articles/19560097366929#h_01HDK534B7VEH2H62WSGDJT5MB) in a specific DMA and what causes it, and take the right actions to amend the situation.

Hover over or click the zone and you’ll receive extra information about:

- **Net flow**: of water in your network (only if all inlet/outlet sensors have readings)

- **Efficiency**: percentage of water that gets to customers (only if there are inlet/outlet flow sensors and demands)

![Zones popover & tooltip.png](https://help.qatium.com/hc/article_attachments/23509223907345)

In addition, with the **Zones panel** you can quickly locate the inlets and outlets in each sector. This will help you understand how the DMAs are supplied and notice if any value is outside the expected range. You’ll be able to promptly find out if there really is an anomaly consumption in the network, increase in NRW, etc...

To activate it:

1. Click on the _Zones_![zones-panel-button.png](https://help.qatium.com/hc/article_attachments/25197783040529) icon
2. Switch the toggle ON ![toggle-on-button.png](https://help.qatium.com/hc/article_attachments/25197783042065)

![ZONES TOGGLE.gif](https://help.qatium.com/hc/article_attachments/23509275835153)

The icon for inlets and outlets ![inlet-outlet-icon.png](https://help.qatium.com/hc/article_attachments/25197783045265) will appear on the map:

- Alone, if **no readings** are available.
- With a sensor icon in **gray**: when in the current time there are **no readings available**.
- With a sensor icon in **blue**: when there are **readings for the current period**.

**Important**:  
– When there are no customer points uploaded in the network, we use junctions with demands to calculate the number of customer points and their pressures.  
– To have a clearer view of this information, you can activate the [Overview work mode](https://help.qatium.com/hc/en-us/articles/18983486652177-Work-modes#h_01HGG0XNDENCXQM49P5R8JN71A:~:text=the%20following%20modes.-,Overview,-It%27s%20the%20default).

# How does Qatium estimate population and base demand?

Permalink: [How does Qatium estimate population and base demand?](https://help.qatium.com/hc/en-us/articles/23491756152593-How-does-Qatium-estimate-population-and-base-demand)

**If you haven’t provided demand data** in your import, Qatium will infer it in 2 steps:

1. Calculates the population using the following formula: **![](https://help.qatium.com/hc/article_attachments/23491779621649)**
2. Multiplies the population by a usage of 135 L/inhabitant/day.

# Element insights

Permalink: [Element insights](https://help.qatium.com/hc/en-us/articles/23484944676625-Element-insights)

## Tooltips and popovers

Once you’ve uploaded your network, you’ll have useful information about your elements’ performance readily at hand. For example: tank’s volume, pipe’s status, flow, diameter, customer points’ pressures, demands, etc.

Just **hover over** or **click on** each element to visualize it.

![HOVER+CLICK.gif](https://help.qatium.com/hc/article_attachments/23485332269713)

**Hovering over** an element icon activates a tooltip with **basic information**.

**Clicking on** an element icon triggers a popover to appear, which provides **more detailed information** than tooltips.

![Pipe popover-tooltip. text.png](https://help.qatium.com/hc/article_attachments/23485406693393)

The insights displayed each time vary, depending on the type of element and the data you uploaded into Qatium.  
For example, if your network includes sensors, you’ll also be able to visualize sensor data.  
Learn more in [this category](https://help.qatium.com/hc/en-us/sections/23508224778769-Readings-live-data-insights).

## Panels

Besides the tooltips and popovers inside the map, you can also find a series of panels on the right side of the map. You can access the information inside each panel by clicking on the corresponding panel button.

### Customer pressure, flow and tank autonomy

You can visualize **customer pressures** ![customer-pressure-panel-button.png](https://help.qatium.com/hc/article_attachments/25196066897553), **flow** ![flow-panel-button.png](https://help.qatium.com/hc/article_attachments/25196062909457) and **tank autonomy** ![tank-autonomy-panel-button.png](https://help.qatium.com/hc/article_attachments/25196062912657) in the corresponding panels, as shown below:

![INSIGHT PANELS.gif](https://help.qatium.com/hc/article_attachments/23485617080977)

Learn more about the Pressure, Flow and Tank autonomy panels in [this article](https://help.qatium.com/hc/en-us/articles/23185903753233-Visualize-insights-results).

### Zones

|                  |                                                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25196236380305)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25196173167633) |

Similarly, if your network includes **zones**, you can also use the _Zones_ ![zones-panel-button.png](https://help.qatium.com/hc/article_attachments/25196173181201) panel to hide or show the zones layer or to see more information about your zones.

![Zones panel.png](https://help.qatium.com/hc/article_attachments/23485790738449)

![ZONES TOGGLE.gif](https://help.qatium.com/hc/article_attachments/23485790767249)

Learn more about the Zones panel insights in [this article](https://help.qatium.com/hc/en-us/articles/23185903753233-Visualize-insights-results#h_01HSB9312YAVEZYKR2V33VYH9V).

### Model deviation

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25196173190033)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25196236380305)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25196173167633) |

If your network includes **live data**, you can check the element and the overall deviation of your simulated network in the _Model deviation_ ![model-deviation-panel-button.png](https://help.qatium.com/hc/article_attachments/25196437733777) panel.

![Deviation panel.png](https://help.qatium.com/hc/article_attachments/23594280483985)

Learn more about model deviation in [this article](https://help.qatium.com/hc/en-us/articles/23508656238865-Model-deviation).

### Demand Spike, Shutdown, Flushing

Finally, on the same side of the map, you’ll find 3 scenario panels: _Demand Spike_ ![demand-spike-panel-button.png](https://help.qatium.com/hc/article_attachments/25196173195537), _Shutdown_ ![shutodown-panel-button.png](https://help.qatium.com/hc/article_attachments/25196236436113) and _Flushing_ ![flushing-panel-button.png](https://help.qatium.com/hc/article_attachments/25196173220497).

You will use these panels to perform different scenarios and visualize their impact on your network.

![Scenario panels.png](https://help.qatium.com/hc/article_attachments/23485486575121)

Find out more about them in [this article](https://help.qatium.com/hc/en-us/sections/23184563806097-Most-common-scenarios).

**Important**:  
Please note that the Shutdown and Flushing functionalities are only available to Pro, Business and Enterprise plan members.

### Toggle buttons

Most panels and popovers include a _toggle button_ which you can switch ON ![toggle-on-button.png](https://help.qatium.com/hc/article_attachments/25196236457617) or OFF ![toggle-off-button.png](https://help.qatium.com/hc/article_attachments/25196236472465) to activate or deactivate the panel view or change the status of some assets.

![TOGGLE.gif](https://help.qatium.com/hc/article_attachments/23487445914513)

# Tanks

Permalink: [Tanks](https://help.qatium.com/hc/en-us/articles/23160072624529-Tanks)

Follow these specs to set or edit the properties of your tanks. Check [this table](https://help.qatium.com/hc/en-us/articles/23182981293969) to see all accepted aliases for each property.

Qatium will process that information by running some validation checks and will try to fill any gaps. Learn more about how Qatium works in [this article](https://help.qatium.com/hc/en-us/articles/23063998429585).

**Volume**

Volume is not a required property in EPANET. It’s calculated from minimum and maximum levels, and diameter, when this data is provided.

**Data you add to your GIS files**

| GIS editor |
| ---------- | --------- |
| Field      | MaxVolume |
| Attribute  |           |

**How Qatium processes that data**

If not specified, Qatium will calculate it from [height](https://docs.google.com/document/d/1oBZLLjNf8LGW29BZKxmqkuUCJJY3wTbFLZS5-p4wnQo/edit#heading=h.o1g6y1j228kv) & [diameter](https://docs.google.com/document/d/1oBZLLjNf8LGW29BZKxmqkuUCJJY3wTbFLZS5-p4wnQo/edit#heading=h.erk80kga8vm4).

**Minimum volume**

**Data you add to your files**

| GIS editor |
| ---------- | -------------- |
| Field      | Minimum Volume |
| Attribute  |                |

| EPANET   |
| -------- | -------------- |
| Property | Minimum Volume |
| Value    |                |

**How Qatium processes that data**

If not specified, Qatium will apply a default value:

| SI units | US units |
| :------: | :------: |
|   0 m3   |  0 ft3   |

**Initial level**

**Data you add to your files**

| GIS editor |
| ---------- | ------------- |
| Field      | Initial level |
| Attribute  |               |

| EPANET   |
| -------- | ------------- |
| Property | Initial level |
| Value    |               |

**How Qatium processes that data**

If not specified, Qatium will apply a default value:

| SI units | US units |
| :------: | :------: |
|   2 m    |   7 ft   |

**Maximum level**

**Data you add to your files**

| GIS editor |
| ---------- | ------------- |
| Field      | Maximum Level |
| Attribute  |               |

| EPANET   |
| -------- | ------------- |
| Property | Maximum Level |
| Value    |               |

**How Qatium processes that data**

If not specified, Qatium will apply a default value:

| SI units | US units |
| :------: | :------: |
|   4 m    |  14 ft   |

**Minimum level**

**Data you add to your files**

| GIS editor |
| ---------- | ------------- |
| Field      | Minimum Level |
| Attribute  |               |

| EPANET   |
| -------- | ------------- |
| Property | Minimum Level |
| Value    |               |

**How Qatium processes that data**

If not specified, Qatium will apply a default value:

| SI units | US units |
| :------: | :------: |
|   0 m    |   0 ft   |

**Height**

**Data you add to your files**

| GIS editor |
| ---------- | ------ |
| Field      | Height |
| Attribute  |        |

| EPANET   |
| -------- | ------ |
| Property | Height |
| Value    |        |

**How Qatium processes that data**

If not specified, Qatium will apply a default value:

| SI units | US units |
| :------: | :------: |
|   0 m    |   0 ft   |

**Diameter**

**Data you add to your files**

| GIS editor |
| ---------- | -------- |
| Field      | Diameter |
| Attribute  |          |

| EPANET   |
| -------- | -------- |
| Property | Diameter |
| Value    |          |

**How Qatium processes that data**

If not specified, Qatium will apply a default value:

| SI units | US units |
| :------: | :------: |
|   20 m   |  70 ft   |

We calculate the default value using the values for the [Maximum Volume](https://help.qatium.com/hc/en-us/articles/23160072624529-Tanks#:~:text=in%20this%20article.-,Volume,-EPANET%20doesn%E2%80%99t%20require) and [Maximum Level](https://help.qatium.com/hc/en-us/articles/23160072624529-Tanks#:~:text=Maximum-,level,-Data%20you%20add) properties to calculate it by applying the following formula:

Diameter = 2 x sqrt(maximumVolume/pi\*maximumLevel

If the diameter is already present, it will be updated with these results.

**Overflow**

**Data you add to your files**

| GIS editor |
| ---------- | ---------------------------------------- |
| Field      | CanOverflow                              |
| Attribute  | True, yes, on, si, sí, false, off, no, 0 |

| EPANET   |
| -------- | ---------------------------------------- |
| Property | CanOverflow                              |
| Value    | True, yes, on, si, sí, false, off, no, 0 |

**How Qatium processes that data**

If not specified, Qatium will apply a default value: **True**.

**Elevation**

Qatium only processes elevation data when it's included as an attribute in point assets like junctions, tanks, supply sources, valves, and pumps.

**Data you add to your files**

| GIS editor |
| ---------- | --------- |
| Field      | Elevation |
| Attribute  |           |

| EPANET   |
| -------- | --------- |
| Property | Elevation |
| Value    |           |

**How Qatium processes that data**

If you have defined both height and elevation for your tanks in the corresponding file, the result will be the sum of both. Otherwise, Qatium will define the elevation using the [Mapbox elevation data](https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/).

**Water quality**

Currently, **Qatium only supports water age to calculate Water Quality**. To have accurate water quality data shown in Qatium, you must include the water age parameter in your files.
**EPANET**

1. Set _Parameter_ property to _Age_ in the Quality options in EPANET
2. Set the _Initial Quality_ property for all the nodes

![Specify water quality .INP.png](https://help.qatium.com/hc/article_attachments/23160104445713)
**GIS files**

Include the Water Age property inside your GIS data. Then add a number (up to 2 decimal places) representing the number of hours.

| GIS editor |
| ---------- | --------- |
| Field      | Water Age |
| Attribute  |           |

![tanks-water-age.png](https://help.qatium.com/hc/article_attachments/26065151131025)

**Thresholds**

If you have readings added to your network, **you can configure warnings by setting thresholds** (minimum and maximum values) for your assets, and if the data received is below or above them we’ll let you know.

**Data you add to your files**

| GIS editor |
| ---------- | --------------------------------------- |
| Field      | WarningThresholdMin WarningThresholdMax |
| Attribute  |                                         |

| EPANET   |
| -------- | -------------------------------------------------- |
| Property | Description                                        |
| Value    | \_\[WarningThresholdMin\]\_\[WarningThresholdMax\] |

Example: _\_1.2_12.5_|

Threshold values in .inp files should **follow the existing order** on the description. Use an underscore to separate each value.

Make sure the **units for the threshold values match the units of the variable** we're setting the warnings to. For tank levels, use level unit.

**How Qatium processes that data**

If not specified, Qatium will ignore it and you won’t receive any warnings.

# Why is my network not displaying water balance insights?

Permalink: [Why is my network not displaying water balance insights?](https://help.qatium.com/hc/en-us/articles/23100160891409-Why-is-my-network-not-displaying-water-balance-insights)

If you have delimited zones but you are not seeing any insights about water balance, it’s probably because your network is missing some data.

If your network doesn’t have flow-meters data, water balance insights won’t appear.

# Qatium is ignoring my files

Permalink: [Qatium is ignoring my files](https://help.qatium.com/hc/en-us/articles/23099060786193-Qatium-is-ignoring-my-files)

While uploading a network, we only admit 1 .inp at a time. If you dropped several .inp files into Qatium, we’ll only process the first one and ignore the rest.

If you need to upload all your files,you can [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# Issues with one-time code

Permalink: [Issues with one-time code](https://help.qatium.com/hc/en-us/articles/23098419631249-Issues-with-one-time-code)

When trying to sign in to Qatium, we’ll send you a one-time code at the e-mail address you are using to access Qatium. If you don’t receive the code:

- Check your spam folder
- Make sure the e-mail address is correct

Sometimes, strong corporate Spam filters can delay the reception of the code. If you receive the code but that it takes a long time, we would recommend reaching out to your IT team so they can take Qatium out of Spam.

If the problem persists, [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# Remove a workspace

Permalink: [Remove a workspace](https://help.qatium.com/hc/en-us/articles/23090044407697-Remove-a-workspace)

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197349895185)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197349901841)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197333397521) |

To remove a team workspace, you must make sure it’s empty and that you’re an [Owner](https://help.qatium.com/hc/en-us/articles/23069798983313), then:

1. Go to the workspace you want to delete
2. Click on _Manage workspace_
3. Select _Remove workspace_
4. Confirm the action by clicking on _Remove workspace_

_![REMOVE WORKSPACE.gif](https://help.qatium.com/hc/article_attachments/23090065346449)_

**Important**:  
The creator of the workspace defines roles and can change them at any time directly from the Manage Workspace button.

Once removed, you won't be able to recover the data previously held in that workspace.

# What happens if two values are submitted for the same asset with identical timestamps?

Permalink: [What happens if two values are submitted for the same asset with identical timestamps?](https://help.qatium.com/hc/en-us/articles/16869247736209-What-happens-if-two-values-are-submitted-for-the-same-asset-with-identical-timestamps)

Qatium will use **the last value received**. The previous value(s) will be ignored and will not be visible in the platform. Our Ingest API is appending data, allowing the user to access the latest data available.

# What is the latest version of Qatium?

Permalink: [What is the latest version of Qatium?](https://help.qatium.com/hc/en-us/articles/16868059926033-What-is-the-latest-version-of-Qatium)

Qatium is constantly improving: we release and implement new functionalities as soon as they are developed and tested. That means the platform is updated and **you are always using the latest version** of Qatium.

# Developer mode

Permalink: [Developer mode](https://help.qatium.com/hc/en-us/articles/24069063665041-Developer-mode)

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197039504017)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197059954321)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197039522705) |

Using our [SDK](https://qatium.com/devtools/), you can extend or change the behavior of existing features in Qatium, and add new ones using [plugins](https://developer.qatium.app/plugins/).

Inside Qatium, you’ll find a **Developer Mode** to connect your local plugin to the production Qatium web app, and test it during development.

![Dev mode.png](https://help.qatium.com/hc/article_attachments/24069063646737)

To enable _Developer Mode_:

1. Go to the profile menu on the top-right of the screen
2. Display the _Advanced Settings_ option
3. Activate the Dev Mode using the toggle ![toggle-on-button.png](https://help.qatium.com/hc/article_attachments/25197059978129)

![DEVMODE.gif](https://help.qatium.com/hc/article_attachments/24069063649809)

After a page refresh, your local plugin should be running in the sidebar.

Learn more about the Developer Mode in the [SDK documentation](https://developer.qatium.app/).

# Pumps

Permalink: [Pumps](https://help.qatium.com/hc/en-us/articles/23162027458961-Pumps)

Here you have all the specifications for the pump’s properties and how to modify them both in GIS files and EPANET. Check [this table](https://help.qatium.com/hc/en-us/articles/23182981293969) to see all accepted aliases for each property.

Qatium will process your data by running some validation checks and we’ll try to fill any gaps. Learn more about how Qatium works in [this article](https://help.qatium.com/hc/en-us/articles/23063998429585).

**Status**

**Data you add to your files**

| GIS editor |
| ---------- | ------ |
| Field      | Status |
| Attribute  | Open   |

Closed|

| EPANET   |
| -------- | -------------- |
| Property | Initial Status |
| Value    | Open           |

Closed|

**How Qatium processes that data**

If not specified, Qatium will apply a default value: **Open**.

The pump’s status in Qatium reads **On** (for open) and **Off** (for closed).

**Relative speed**

**Data you add to your files**

| GIS editor |
| ---------- | ----- |
| Field      | Speed |
| Attribute  |       |

| EPANET   |
| -------- | ----- |
| Property | Speed |
| Value    |       |

**How Qatium processes that data**

If not specified, Qatium will ignore it.

**Power**

**Data you add to your files**

| GIS editor |
| ---------- | ----- |
| Field      | Power |
| Attribute  |       |

| EPANET    |
| --------- | ----- |
| Property  | Power |
| Attribute |       |

**How Qatium processes that data**

If neither the Power nor the Operating curve is specified, Qatium will apply a default value for Power: **0.01 kW**.

**Operating curve (head curve)**

**Data you add to your files**

| GIS editor |
| ---------- | ----------------------- |
| Field      | pump_curve              |
| Attribute  | x1 y1;x2 y2;x3 y3, etc. |

| EPANET   |
| -------- | ----------------------- |
| Property | Pump Curve              |
| Value    | x1 y1;x2 y2;x3 y3, etc. |

The format of the curve must be: _x1 y1;x2 y2;x3 y3..._ Where **_x_** **is related to flows** and **_y_** **is related to heads**. The **_;_**(semi-colon) separates different point curves and a space separates the x and y values.

|     |      |
| --- | ---- | -------- |
| x   | flow | Example: |

x1 y1;x2 y2;x3 y3|
|y|head|
|;|separates different point curves|
|\[space\]|separates _x_ and _y_ values|

As it is something mandatory in Epanet, we define an ID for the pump curve. In this case, we use the asset ID + \_HC.

For example: if the pump ID is _P_Mandalorian_ we create a curve with the ID _P_Mandalorian_HC_.

**How Qatium processes that data**

If the curve is not specified and the Power property is not defined by the user, Qatium assigns a default value for the Power (0.01 kW). **Curves don’t have default values**.

**Terrain elevation**

Qatium only processes elevation data when it's included as an attribute in point assets like junctions, tanks, supply sources, valves, and pumps.

**Data you add to your files**

| GIS editor |
| ---------- | --------- |
| Field      | Elevation |
| Attribute  |           |

| EPANET   |
| -------- | --------- |
| Property | Elevation |
| Value    |           |

**How Qatium processes that data**

If you have defined both height and elevation for your pumps in the corresponding file, the result will be the sum of both. Otherwise, Qatium will define the elevation using the [Mapbox elevation data](https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/).

**Simple control rules**

**For both .inp and GIS files**, Qatium supports 3 kinds of [simple rules as defined in EPANET](https://epanet22.readthedocs.io/en/latest/input_keywords.html?highlight=controls#controls) for pipes, valves, and pumps. You can also include your rules in a field named \[“rule”, “rules”\].

**For GIS files only**, Qatium also accepts a short version of control rules: the element type and ID followed by a list of its different settings:

**_Element properties:_** _OPEN AT TIME 3_

Will be interpreted as _ELEMENT OPEN AT TIME 3_

If you specify these rules for all assets in just one asset’s properties, it will apply to every specified asset regardless of the location of the rule.

For example:

**_Pipe 1 properties:_** Pipe 1 OPEN AT TIME 3, _Pump_ _2 CLOSED AT TIME 2, Pump 2 OPEN AT TIME 3_

Will apply both to _Pipe 1_ and _Pump_ _2_, regardless of the pump’s rule being in the pipe’s properties.

Qatium accepts multiple control rules separators: tab, comma, semicolon, break line. If the control rule is not valid, it will be included in the model and the .inp file as a comment, in case the model is downloaded.

**Orientation**

**Data you add to your files**

| GIS editor |
| ---------- | ---------------- |
| Field      | Upstream         |
| Attribute  | Upstream pipe ID |

| EPANET   |
| -------- | -------------------------------- |
| Property | Start node / End node            |
| Value    | Upstream and downstream nodes ID |

**How Qatium processes that data**

If not specified, Qatium will calculate orientation. Learn more in [this article](https://help.qatium.com/hc/en-us/articles/23510069920529).

# What happens if the water balance insights are N/A?

Permalink: [What happens if the water balance insights are N/A?](https://help.qatium.com/hc/en-us/articles/23100209924753-What-happens-if-the-water-balance-insights-are-N-A)

If the net flow, efficiency, or both, appears as N/A, probably there is data available but the insights are incoherent, or some flow-meter is missing.

# Why isn’t my GIS data mapped to the right asset?

Permalink: [Why isn’t my GIS data mapped to the right asset?](https://help.qatium.com/hc/en-us/articles/23099326612753-Why-isn-t-my-GIS-data-mapped-to-the-right-asset)

When importing GIS data, Qatium will try to interpret it and assign an asset type to each uploaded file. If you notice that Qatium couldn’t recognize your dataset, we recommend renaming your files to end as “\_assettype”. _E.g. mynetwork_valves.geojson_

Here are the accepted aliases for each element type:

| Element type   | Aliases                                                                                                                                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Supply sources | source, reservoir, fuente, embalse, pozo, well, suppl, suministro, inyeccion, import, input, entrada, wtp, wtw                                                                                                             |
| Tanks          | tank, tanque, deposito, almacenamiento, tower                                                                                                                                                                              |
| Pumps          | pump, bomba, impulsion, booster, bombeo                                                                                                                                                                                    |
| Valves         | valve, valvula, shutoff, tcv, gpv, prv, psv, fcv, pbv, regula, control, llave, grifo, reductora, reducing, reducer, backflow                                                                                               |
| Junctions      | junction, hydrant, hyd, fitting, meter, contador, medidor hidrante, nodo, nudo, ventosa, incendio, boca, cruce, sensor, logger, service, connection,desague,caudalimetro, clorador,filtro,muestreo,sondeo, toma_de_presion |
| Zones          | zone, zona, dma, sector                                                                                                                                                                                                    |

**Important**:  
Pipe feature files will be determined by their shape–line or polyline.

# I can't download my network

Permalink: [I can't download my network](https://help.qatium.com/hc/en-us/articles/23098460583569-I-can-t-download-my-network)

Only [network owners](https://help.qatium.com/hc/en-us/articles/23069891400977-Roles-in-networks) can download networks. If you don’t see the download icon, it means that you don’t have the permissions to do it. Ask the network owner to upgrade your role, or download the network themself.

If nothing happens after clicking on the _Download_ ![download-network-button.png](https://help.qatium.com/hc/article_attachments/25198904897297) button, you might have:

- Some Internet connection issues
- Corporate security settings that prevent you from downloading files from the Internet
- To select the folder for download–this window or notification might be hidden.

If the problem persists, [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# Share a network

Permalink: [Share a network](https://help.qatium.com/hc/en-us/articles/23070099691153-Share-a-network)

|                  |                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Available on** | ![pro-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197438203665)![business-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197467169425)![enterprise-plan-badge.png](https://help.qatium.com/hc/article_attachments/25197467174161) |

Every user can share all networks within their personal workspace (_My networks_). If someone added you to a workspace, you’ll need to have an [Owner role](https://help.qatium.com/hc/en-us/articles/23069891400977) to share the networks within it.

To share a network:

1. Click on the _Share_![share-network-button.png](https://help.qatium.com/hc/article_attachments/25197438219025) button
2. Enter the email address of the user you wish to share the network with
3. Select _Share Network_

The shared network will automatically appear with a _Shared Network_ badge in the added users’ workspace.

![SHARE NETWORK.gif](https://help.qatium.com/hc/article_attachments/23070046827409)

Users invited to a network can do everything except for:

- Sharing the network with other users
- Deleting the network
- Uploading CSV readings

If you have an [Owner](https://help.qatium.com/hc/en-us/articles/23069891400977) role, you’ll also be able to check the list of users invited to a shared network and remove any user from it, if needed.

1. Click on the _Share_![share-network-button.png](https://help.qatium.com/hc/article_attachments/25197438219025) button
2. Find the member you want to remove from the list
3. Choose the _Remove_ option
4. Confirm the action by clicking on _Remove member_

_![REMOVE MEMBER.gif](https://help.qatium.com/hc/article_attachments/23070099681809)_

**Important**:  
To share networks within a shared workspace, you’ll need to have an Owner role. Owners are the creators of the workspace or anyone defined as such.

# How is the range in the demand spike panel calculated?

Permalink: [How is the range in the demand spike panel calculated?](https://help.qatium.com/hc/en-us/articles/18313858932241-How-is-the-range-in-the-demand-spike-panel-calculated)

You can choose a demand to apply within a given range. The maximum flow of the range is estimated using the widest connected pipe diameter and the maximum flow range using a fixed velocity of 10 m/s or 32.8084 ft/s.

# What are the system requirements using Qatium?

Permalink: [What are the system requirements using Qatium?](https://help.qatium.com/hc/en-us/articles/16868067610513-What-are-the-system-requirements-using-Qatium)

Qatium works on any device with a screen and an up-to-date browser. That includes smartphones, tablets, and computers. But it’s recommended that you use the biggest screen and most powerful CPU available.

You can still use the App on older, less powerful devices, but our recommended hardware specifications are **any device from 2020 onwards with a 3GHz CPU, 8 GB of RAM, and a network connection of 10 Mbps**.

If you are still experiencing some problems, it might be due to the following:

- **Complexity of your network**: the more assets in your network, the harder it becomes to run the calculations.
- **Background tasks**: operative system automatic maintenance, other demanding apps, etc.
- Number of **tabs** in your browser
- Quality of your **Internet connection**
- Possible **hardware bottlenecks**

# Valves

Permalink: [Valves](https://help.qatium.com/hc/en-us/articles/23181921504017-Valves)

Follow these specs to specify your valves’ type, their status, and/or edit their properties.  
Check [this table](https://help.qatium.com/hc/en-us/articles/23182981293969) to see all accepted aliases for each property.

Qatium will process that information by running some validation checks and we’ll try to fill any gaps. Learn more about how Qatium works in [this article](https://help.qatium.com/hc/en-us/articles/23063998429585).

**Type**

#### Shut-off valves

**Data you add to your files**

| GIS editor |
| ---------- | ---- |
| Field      | Type |
| Attribute  | TCV  |

| EPANET   |
| -------- | ---- |
| Property | Type |
| Value    | TCV  |

**How Qatium processes that data**

If not specified, Qatium will apply a default value: **TCV**.

#### Regulating valves

**Data you add to your files**

| GIS editor |
| ---------- | ---- |
| Field      | Type |
| Attribute  | PBV  |

FCV

PSV

PRV

GPV|

| EPANET   |
| -------- | ---- |
| Property | Type |
| Value    | PBV  |

FCV

PSV

PRV

GPV|

**How Qatium processes that data**

If not specified, Qatium will apply a default value: **TCV**.

**Setting**

**Data you add to your files**

| GIS editor |
| ---------- | ------- |
| Field      | Setting |
| Attribute  |         |

| EPANET   |
| -------- | ------- |
| Property | Setting |
| Value    |         |

**How Qatium processes that data**

If not specified, it will be ignored and the Status will be **Active**.

**Status**

#### Shut-off valves

**Data you add to your files**

| GIS Editor |
| ---------- | ------ |
| Field      | Status |
| Attribute  | Active |

Open

Closed|

| EPANET   |
| -------- | ------------ |
| Property | Fixed Status |
| Value    | None         |

Open

Closed|

**How Qatium processes that data**

If not specified, Qatium will apply a default value: **Active/Open**.

#### Regulating valves

**Data you add to your files**

| GIS Editor |
| ---------- | ------ |
| Field      | Status |
| Attribute  | Active |

Open

Closed|

| EPANET   |
| -------- | ------------ |
| Property | Fixed Status |
| Value    | None         |

Open

Closed|

**How Qatium processes that data**

If not specified, Qatium will apply a default value: Open (or active–regulating, in case there’s a setting property).

You can also modify the valve’s status directly in Qatium while performing scenarios. But bear in mind that this change won’t persist in your actual network.

**Diameter**

**Data you add to your files**

| GIS editor |
| ---------- | -------- |
| Field      | Diameter |
| Attribute  |          |

| EPANET   |
| -------- | -------- |
| Property | Diameter |
| Value    |          |

**How Qatium processes that data**

If not specified, Qatium will apply a default value:

| SI units | US units |
| :------: | :------: |
|  200 mm  |   8 in   |

**Terrain elevation**

Qatium only processes elevation data when it's included as an attribute in point assets like junctions, tanks, supply sources, valves, and pumps.
**Data you add to your files**

| GIS editor |
| ---------- | --------- |
| Field      | Elevation |
| Attribute  |           |

| EPANET   |
| -------- | --------- |
| Property | Elevation |
| Value    |           |

**How Qatium processes that data**

If not specified: Qatium will add it from [Mapbox elevation data](https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/).

**Simple control rules**

For both .inp and GIS files, Qatium supports 3 kinds of [simple rules as defined in EPANET](https://epanet22.readthedocs.io/en/latest/input_keywords.html?highlight=controls#controls) for pipes, valves, and pumps. You can also include your rules in a field named \[“rule”, “rules”\].

For GIS files only, Qatium also accepts a short version of control rules: the element type and ID followed by a list of its different settings:

**_Element properties:_** _OPEN AT TIME 3_

Will be interpreted as _ELEMENT OPEN AT TIME 3_

If you specify these rules for all assets in just one asset’s properties, it will apply to every specified asset regardless of the location of the rule.

For example:

**_Pipe1 properties:_** Pipe1 OPEN AT TIME 3, _Valve2 CLOSED AT TIME 2, Valve2 OPEN AT TIME 3_

Will apply both to _Pipe1_ and _Valve2_, regardless of the valve’s rule being in the pipe’s properties.

Qatium accepts multiple control rules separators: tab, comma, semicolon, break line. If the control rule is not valid, the model and the .inp file will include it as a comment, in case you download the model from Qatium.

**Orientation**

To define the orientation, we recommend defining the upstream pipe in your pump and valve layers as it limits inferences.

**Data you add to your files**

| GIS editor |
| ---------- | ---------------- |
| Field      | Upstream         |
| Attribute  | Upstream pipe ID |

| EPANET   |
| -------- | -------------------------------- |
| Property | Start node / End node            |
| Value    | Upstream and downstream nodes ID |

**How Qatium processes that data**

If not specified, Qatium will calculate orientation. Learn more in [this article](https://help.qatium.com/hc/en-us/articles/23510069920529).

# Efficiency doesn’t appear on the water balance insights

Permalink: [Efficiency doesn’t appear on the water balance insights](https://help.qatium.com/hc/en-us/articles/23100255837201-Efficiency-doesn-t-appear-on-the-water-balance-insights)

Efficiency will only appear if we receive live demands for all the junctions classified as Customers. If not, the tooltip will only show the Net flow.

# Why is the map not visible?

Permalink: [Why is the map not visible?](https://help.qatium.com/hc/en-us/articles/23099340398865-Why-is-the-map-not-visible)

When your model (.inp) doesn’t have a projection, our assistant Q will start a wizard to help you locate your network and define the projection of your model. If you skip or ignore this step, Qatium won’t be able to determine the projection and location of your model, and no background map will be displayed.

But don’t you worry, you can always open back the wizard to set the projection and display the map by clicking on Q’s ![q-assistant-icon.png](https://help.qatium.com/hc/article_attachments/25198927179537) icon.

# I can't access a workspace or network

Permalink: [I can't access a workspace or network](https://help.qatium.com/hc/en-us/articles/23098522578449-I-can-t-access-a-workspace-or-network)

If you can’t access a workspace or a network:

- Check you’ve been invited to that workspace or that the network has been shared with you.
- Make sure you are signing in with the correct e-mail address.

If you are experiencing connection issues or have a limited connection, try reloading the page or coming back later when you have a better connection.

If the problem persists, [contact us](https://help.qatium.com/hc/en-us/requests/new?ticket_form_id=16143842484369).

# Duplicate a network

Permalink: [Duplicate a network](https://help.qatium.com/hc/en-us/articles/23070367405969-Duplicate-a-network)

Duplicating networks makes it easier to compare different [scenarios](https://help.qatium.com/hc/en-us/categories/23184481749777-Running-scenarios) for the same network without compromising the original one. You will have a copy of the original network connected to the same readings and warnings, for you to perform different scenarios with the same exact data.

![Duplicate network.png](https://help.qatium.com/hc/article_attachments/23070319536273)

To duplicate a network, you must have an [Owner role](https://help.qatium.com/hc/en-us/articles/23069891400977) and then:

1. Go to the network card
2. Select the _Duplicate network_![duplicate-network-button.png](https://help.qatium.com/hc/article_attachments/25197457860753) button
3. You’ll be redirected to the duplicated network: _Copy of_ \[original network name\]

![DUPLICATE NETWORK.gif](https://help.qatium.com/hc/article_attachments/23070319539089)

# Can I use Qatium in offline mode?

Permalink: [Can I use Qatium in offline mode?](https://help.qatium.com/hc/en-us/articles/19656452894225-Can-I-use-Qatium-in-offline-mode)

Qatium is based on cloud technology, so it needs an internet connection to work.

Although you may still **be able to work with an unstable connection**, this would affect the performance of the platform.

You can also download your network as an .inp file so you can work offline using a different software.

# Can I perform watermain shutdown without valves?

Permalink: [Can I perform watermain shutdown without valves?](https://help.qatium.com/hc/en-us/articles/18314172533905-Can-I-perform-watermain-shutdown-without-valves)

**Yes, but** it's not ideal. When Qatium doesn't find enough shutoff valves to isolate the pipe, it assumes that the selected pipe represents a pipe surrounded by valves and changes its status to closed.

We **recommend adding all your valves and customer points** to your network for the optimal experience.

# Zones

Permalink: [Zones](https://help.qatium.com/hc/en-us/articles/23182710465937-Zones)

You can add zones to your network at any time. To do it, simply **upload polygon files** (either Shapefiles or GeoJSON) to use as zones in your model.

**Inlets & outlets**

Inside your zones, you can specify which of the elements **with flowmeters** are inlets or outlets. If you have flowmeter data,it will improve the overall accuracy of your network in the following 2 ways:

- It allows you to adjust demands in each zone
- It allows Qatium to set the boundaries of each zone more precisely, and determine which elements belong to it

To add inlets and outlets to your zones, edit your GIS files following the table below.

**Data you add to your files**

| Inlets    |
| --------- | ------ |
| Field     | Inlets |
| Attribute |        |

| Outlets   |
| --------- | ------- |
| Field     | Outlets |
| Attribute |         |

**How Qatium processes that data**

If not specified, Qatium will ignore it and you won’t see it on the platform.

**Demands**

You can specify Base demand and Demand patterns in your GIS files. Here’s how Qatium process your data depending on what you have specified:

- If **both Base demand and Demand pattern** are specified in the files, we’ll process that data as it is.
- If **only Base demand** is specified, we infer the Demand pattern as an array with a demand factor of 1. _I.e. there is no period modulation._
- If **only the Demand Pattern** is specified: we infer the Base demand as 0.

You can assign different demand patterns per network zone by uploading a valid GeoJSON or Shapefile that contains a “MultiPolygon” or “Polygon” geometry.

**Important**:  
The length of the DemandPattern is not limited. Each value corresponds to an hour or the specified pattern time step defined in the INP. You can add as many comma-separated values as required.

# How can I find my map projection?

Permalink: [How can I find my map projection?](https://help.qatium.com/hc/en-us/articles/23099537203345-How-can-I-find-my-map-projection)

When you import your network, Qatium will read the map projection from your files. If we can’t find it we’ll start a wizard for you to locate your network (zoom in to its location). Once zoomed in, you’ll have a list of potential projections to test and select.

Some projections end up being very similar, if in doubt select one, you’ll be able to change it later. Qatium is using the EPSG referencing to display the recommended projections. If you don’t know the EPSG reference of your projection, we recommend:

- Search for it at[http://epsg.io/](http://epsg.io/)
- Ask your GIS or hydraulic modeling team or consultant that built the model what projection system was used

# How does Qatium calculate water balance insights?

Permalink: [How does Qatium calculate water balance insights?](https://help.qatium.com/hc/en-us/articles/19248293877137-How-does-Qatium-calculate-water-balance-insights)

The main insights we are displaying on water balance are:

- Net flow in your network, which we get from the flowmeters:

**\*Net flow** = inlets - outlets\*

- Efficiency (the percentage of water that actually gets to customers):

**\*Efficiency** = (Consumption / Net flow)\*100\*

We get the consumption from live-demands.

# What is the most used modeling engine?

Permalink: [What is the most used modeling engine?](https://help.qatium.com/hc/en-us/articles/16868190600593-What-is-the-most-used-modeling-engine)

## Distribution networks

**EPANET** engine is the most used engine in the world. Beyond the [EPANET application](https://www.epa.gov/sciencematters/epanet-220-epa-and-water-community-collaboration) itself, Qatium, InfoWater (Pro), and WaterGEMS - among others - use an EPANET engine. Even water modeling solutions with proprietary engines (like InfoWorks WS and Sinergee) can export to EPANET format.

## Waste and stormwater networks

**SWMM** engine is the most used engine for waste and stormwater networks. Beyond the EPA SWMM application itself, InfoSWMM, PCSWMM - and many others - are using the SWMM engine. Even water modeling solutions with proprietary engines (like InfoWorks ICM) can export to the EPA SWMM format.

# My network location is wrong

Permalink: [My network location is wrong](https://help.qatium.com/hc/en-us/articles/23099501513873-My-network-location-is-wrong)

Qatium locates your network in different ways, depending on the type of files you upload and the information they include. You can always change it and find a better one following these steps:

1. Open the assistant by clicking on Q’s ![q-assistant-icon.png](https://help.qatium.com/hc/article_attachments/25198930461329) icon
2. Find _Your network seems misplaced?_ on the suggestions
3. Select _Change its location_
4. Go over the projection candidates and select the correct one

# We don't use EPANET. Can we still use Qatium?

Permalink: [We don't use EPANET. Can we still use Qatium?](https://help.qatium.com/hc/en-us/articles/16868211263633-We-don-t-use-EPANET-Can-we-still-use-Qatium)

Yes! Qatium allows you to use GIS data only, even if we recommend uploading an EPANET model(.inp).

Also, most water modeling applications (including [InfoWater Pro](https://www.autodesk.com/products/infowater-pro/overview?us_oa=dotcom-us&us_si=5f96ccec-9374-4fcd-91c1-05b6a68a22f1&us_st=InfoWater%20Pro&us_pt=INFWP&term=1-YEAR&tab=subscription&plc=INFWP) and [WaterGEMS](https://www.bentley.com/software/openflows-watergems/)) use EPANET in the background and **can export to EPANET**.  
[Learn how to export to EPANET inp format.](https://help.qatium.com/hc/en-us/articles/16868266021009-How-to-create-an-EPANET-file-for-Qatium)

Learn more in [this article](https://help.qatium.com/hc/en-us/articles/23064699184785).

# How to create an EPANET file for Qatium?

Permalink: [How to create an EPANET file for Qatium?](https://help.qatium.com/hc/en-us/articles/16868266021009-How-to-create-an-EPANET-file-for-Qatium)

- To create a .inp file from [**EPANET 2.2**](https://epanet22.readthedocs.io/en/latest/11_importing_exporting.html#exporting-to-a-text-file:~:text=Map%20Export%20Dialog.-,11.7.%20Exporting%20to%20a%20Text%20File,-To%20export%20a)**:** go to File > Export > Network.

![EPANET_export_INP.gif](https://help.qatium.com/hc/article_attachments/21704084184977)

- To create a .inp file from [**WaterGEMS**](https://docs.bentley.com/LiveContent/web/Bentley%20WaterGEMS%20SS6-v1/en/GUID-B17CEA08-E720-42D5-A340-0BDE4521951C.html)**:** go to File > Export > EPANET - Choose **_No - use element IDs option_**.

![WaterGEMS_export_INP.gif](https://help.qatium.com/hc/article_attachments/21689131981841)

- To create a .inp file from [**InfoWater Pro**](https://help.autodesk.com/view/INFWP/ENU/?guid=GUID-82C12DB7-7910-49E2-B263-580336C228FD), go to the Model Explorer > Command Center > Exchange group > Export EPANET

![InfoWaterPro_export_INP-.gif](https://help.qatium.com/hc/article_attachments/21689393041681)

- To create a .inp file from [**InfoWorks WS Pro**](https://help.autodesk.com/view/IWWSPRO/2024/ENU/?guid=GUID-B4235D41-65C7-4F22-8571-3C50FC193A81), in the explorer panel, right-click on the network you want to export, select Export > EPANET V2

For more details you can visit: [InfoWorks Pro Help - Exporting to EPANET](https://help2.innovyze.com/infoworkswspro/Content/HTML/WS/p_exporting_to_epanet_files.htm)

Before importing the resulting file into Qatium, **make sure any information from the original model is missing**.

# What is the difference between EPANET and Qatium?

Permalink: [What is the difference between EPANET and Qatium?](https://help.qatium.com/hc/en-us/articles/16868286845073-What-is-the-difference-between-EPANET-and-Qatium)

**EPANET** is a public domain, water distribution system modeling software package created by the US Environmental Protection Agency (EPA). It uses a mathematical engine, the EPANET engine, for solving hydraulic equations and calculating pressures and flows across the network.

It is the engine used by most hydraulic modeling applications such as InfoWater (Pro), WaterGEMS/WaterCAD, Fluidit Water, and, of course, Qatium.

**Qatium**, on the other hand, is an open and collaborative water management platform that allows you to build a digital replica of your network within minutes and provides you with all the necessary tools to optimize its performance.

# Who to ask for network information in my organization?

Permalink: [Who to ask for network information in my organization?](https://help.qatium.com/hc/en-us/articles/16868314049297-Who-to-ask-for-network-information-in-my-organization)

As a utility, you could ask for network information to:

- **Hydraulic modeling team**: ask them for an **EPANET hydraulic model**. They may use InfoWater, WaterCAD, WaterGEMS, EPANET or another hydraulic modeling software.
- **GIS or asset management team:** they will be able to give you more insights about the available network information - whether hydraulic model or GIS dataset.
- **Consultants or contractors you worked with**: a hydraulic model may have been created for you by a consultant as part of your water master plan, and they should be able to provide a copy for you.

# What are the different measurement units used in Qatium?

Permalink: [What are the different measurement units used in Qatium?](https://help.qatium.com/hc/en-us/articles/16869228092305-What-are-the-different-measurement-units-used-in-Qatium)

Qatium uses the same units as the EPANET engine, either customary (US) or international system (SI) depending on the units present in source data that's uploaded into Qatium.

|                                                                    |                     |                             |
| ------------------------------------------------------------------ | ------------------- | --------------------------- |
| International System                                               | US Customary system |
| Network length                                                     | km                  | mi (mile)                   |
| Element length                                                     | m                   | ft                          |
| Flow / Assigned demand                                             | l/s                 | gal/min                     |
| Height                                                             | m                   | ft (feet)                   |
| Pressure (max, min, mean)                                          | m                   | psi (pound per square inch) |
| Headloss                                                           | m/km                | ft/kft (feet/kilofeet)      |
| Volume                                                             | m3                  | ft3                         |
| Capacity / Average error (model deviation) / Relative speed (pump) | %                   | %                           |
| Velocity                                                           | m/s                 | ft/s (feet per second)      |
| Pipe diameter                                                      | mm                  | in (inches)                 |
| Tank diameter                                                      | m                   | ft                          |
| Upstream / Downstream pressure                                     | m                   | psi (pound per square inch) |
| Power                                                              | kw                  | hp                          |
| Elevation                                                          | m                   | ft                          |
| Relative head                                                      | m                   | ft                          |
| Water age                                                          | h                   | h                           |

## How do we know what unit is your network in?

To determine the unit system of the network, Qatium performs checks on the diameter field of pipe files, which consist of 3 stages:

1. **Filtering:** we accept values within the range from 1 to 4,000
2. **Classification by file:** we check if each file can belong to _US Customary_ when

- the value of the maximum diameter is less than 150
- the value of the minimum diameter is less than 15

If neither of the conditions is met, the file is set as _International System._

**Setting the network unit system:** if any of the pipe files was set as _International System_, the network unit is also set as _International System_. Otherwise it is set as _US Customary_.

[Please tell us](https://roadmap.qatium.com/c/164-units-system-selection) if you are having trouble with units in Qatium.
