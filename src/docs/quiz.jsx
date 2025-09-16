const segment = {
  basic: 'Basic',
  medium: 'Medium',
  advanced: 'Advanced',
};

const quiz = {
  quizTitle: 'React Quiz of Contentful',
  quizSynopsis: '',
  nrOfQuestions: '50',
  progressBarColor: '#9de1f6',
  questions: [
    {
      "scenario": "Your Python Opal tool is designed to receive numerical inputs, but occasionally users provide non-numeric values, causing runtime errors.",
      "question": "How does the Python SDK, in conjunction with FastAPI and Pydantic, primarily help in preventing such issues and providing meaningful feedback?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "By automatically converting all inputs to strings, avoiding type errors.",
        "By relying on the user to always provide correct input.",
        "By leveraging Python type hints and Pydantic models for automatic data validation and error reporting.",
        "By requiring manual try-except blocks for every input parameter.\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You are tasked with creating a new Opal tool in TypeScript that will fetch product details. You've written the core logic in an async function within a class.",
      "question": "What is the primary mechanism provided by the @optimizely-opal/opal-tools-sdk to expose this function as a callable Opal tool, making it discoverable by the platform?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Manually registering the function with an Express route.",
        "Applying the tool() decorator to the class containing the function.",
        "Exporting the function as a default module.",
        "Implementing a custom registerTool method in your main application file.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A data science team within Optimizely wants to develop an Opal tool that performs complex statistical analysis on large datasets of A/B test results and generates predictive models for future experiment outcomes.",
      "question": "Given the nature of this task, which Optimizely Opal SDK would be the most suitable choice for development?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "JavaScript/TypeScript SDK",
        "C# SDK",
        "Ruby SDK",
        "Python SDK\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A content manager wants an Opal tool that can automatically validate an article's word count and check for specific keywords before it proceeds to the next workflow step in CMP.",
      "question": "Given C#'s strengths and the context of the example project, which type of integration and processing would this scenario primarily leverage within a C#-based Opal tool?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Frontend UI rendering and client-side scripting.",
        "Backend automation, content validation, and integration with existing .NET applications/services.",
        "Complex database schema migrations.",
        "Direct manipulation of Optimizely's internal UI components.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A company has a core C# Opal tool that manages product information. They now need to add a new feature that generates AI-powered marketing copy for each product, a task best suited for Python's natural language processing libraries.",
      "question": "How can the C# tool effectively integrate with a Python-based Opal tool to achieve this, while maintaining a clear separation of concerns?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Rewrite the entire C# tool in Python.",
        "The C# tool invokes the Python Opal tool via its HTTP execution endpoint, passing product data as parameters.",
        "The C# tool directly embeds the Python code.",
        "Both tools write directly to the same local file system.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your Opal tool needs to accept a campaign_id (string) and a budget_amount (float).",
      "question": "How would you define these parameters in your Python tool function's signature to ensure proper type inference and validation by the SDK and FastAPI?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "async def my_tool(campaign_id, budget_amount):",
        "async def my_tool(params: dict):",
        "async def my_tool(campaign_id: str, budget_amount: float):",
        "async def my_tool(campaign_id=str, budget_amount=float):\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "After processing data, your Python Opal tool needs to send back a structured response to Optimizely Opal.",
      "question": "What is the expected return type for an async Python tool function that Optimizely Opal will correctly interpret as a response?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A Python tuple (e.g., (\"\"success\"\", \"\"data\"\")).",
        "A Python dictionary or a Pydantic model instance, which will be serialized to JSON.",
        "A Python list (e.g., [\"\"item1\"\", \"\"item2\"\"]).",
        "A raw string containing HTML.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "An Opal tool is designed to perform a series of sequential operations, where the output of one step becomes the input for the next. This process involves both data retrieval (I/O bound) and complex calculations (CPU bound).",
      "question": "When considering \"\"Performance Optimization,\"\" what general strategy is often effective for such mixed workloads in a hybrid environment?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Distributing the I/O bound tasks to one SDK (e.g., JS/TS) and CPU bound tasks to another (e.g., Python/C#).",
        "Performing all operations synchronously within a single tool.",
        "Avoiding any form of parallel processing.",
        "Increasing the number of external API calls.\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A .NET developer is setting up a new ASP.NET Core Web API project to build an Optimizely Opal tool. They've installed the OptimizelyOpal.OpalToolsSDK NuGet package.",
      "question": "What is the essential next step in Program.cs to integrate the Opal Tools Service into their application's dependency injection container and middleware pipeline?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Manually adding [Tool] attributes to all controller methods.",
        "Calling builder.Services.AddControllers() and app.UseRouting().",
        "Adding builder.Services.AddOpalToolsService() and app.UseOpalToolsService().",
        "Configuring a custom IStartupFilter to register the tools.\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "An enterprise client with a significant investment in Microsoft technologies and existing ASP.NET Core applications needs an Opal tool to automate the creation of content items in their CMS based on data from their internal SQL Server database.",
      "question": "Which Optimizely Opal SDK would align best with their current technology stack and development expertise?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Python SDK",
        "JavaScript/TypeScript SDK",
        "C# SDK",
        "Go SDK\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You are developing an Opal tool that updates a customer's order, which involves multiple nested fields like shippingAddress (with street, city, zipCode), paymentInfo (with cardNumber, expiryDate), and items.",
      "question": "Which C# construct is the best practice for defining such complex, nested parameter structures and ensuring robust data validation for your Opal tool?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Using dynamic objects for all parameters.",
        "Defining a Tuple for each nested structure.",
        "Creating Plain Old CLR Objects (POCOs) as parameter models.",
        "Relying on ExpandoObject for flexible schema.\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You are designing a hybrid Opal solution where a Python tool processes large datasets and stores the results, and a JavaScript/TypeScript tool then retrieves and displays these results.",
      "question": "Which communication pattern would be most appropriate for transferring large processed datasets between these two distinct Opal tools, ensuring persistence and efficient retrieval?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Utilizing shared databases or object storage for persistent data transfer.",
        "Direct synchronous HTTP API calls for every data point.",
        "Passing data as query parameters in GET requests.",
        "Embedding the entire dataset within the tool's manifest.\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A developer has finished building their Opal tool and wants to deploy it to the Optimizely Connect Platform (OCP). They have their tool's code ready.",
      "question": "Before deploying to OCP, what is a fundamental prerequisite related to the tool's accessibility that must be ensured, regardless of the hosting platform?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "The tool must be written in JavaScript/TypeScript.",
        "The tool's /healthcheck endpoint must return a 200 OK status.",
        "The tool must be containerized using Docker.",
        "The tool's /discovery endpoint must be publicly accessible.\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A developer is setting up a new Node.js project to build an Optimizely Opal tool using the JavaScript/TypeScript SDK. They've installed the SDK and TypeScript.",
      "question": "What crucial configuration step is necessary in tsconfig.json to ensure that the @tool() decorator functions correctly for defining their Opal tools?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Setting \"\"module\"\": \"\"commonjs\"\"",
        "Enabling \"\"strictNullChecks\"\": true",
        "Setting \"\"experimentalDecorators\"\": true and \"\"emitDecoratorMetadata\"\": true",
        "Configuring \"\"outDir\"\": \"\"dist\"\"\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your Opal tool needs to securely access a third-party CRM system on behalf of the user. The CRM uses OAuth 2.0 for authentication.",
      "question": "Which advanced authentication mechanism would be the most appropriate and secure way for your Opal tool to gain authorized access to the user's data in the CRM?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Hardcoding the user's CRM credentials directly into the tool.",
        "Using a simple bearer token that never expires.",
        "Relying on IP address whitelisting for the CRM API.",
        "Implementing an OAuth flow to obtain and manage access tokens."
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You are implementing the core logic for an Opal tool that processes user input.",
      "question": "What is the expected signature and return type for the method within your tool class that Optimizely Opal will call to execute your tool's functionality?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "async execute(params: any): Promise",
        "function execute(data: any): void",
        "execute(input: string): string",
        "static run(args: string[]): boolean\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your C# Opal tool is designed to receive numerical inputs, but occasionally users provide non-numeric values, causing runtime errors.",
      "question": "How does the C# SDK, in conjunction with ASP.NET Core and POCOs, primarily help in preventing such issues and providing meaningful feedback?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "By automatically converting all inputs to strings, avoiding type errors.",
        "By relying on the user to always provide correct input.",
        "By requiring manual try-catch blocks for every input parameter.",
        "By leveraging strongly-typed POCOs and built-in model binding/validation attributes for automatic data validation.\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A company uses Optimizely DXP but has a proprietary internal system for managing product inventory. They want Optimizely Opal to be able to check real-time stock levels before recommending products to customers.",
      "question": "What is the primary reason for building a custom Opal tool in this scenario?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "To replace the existing proprietary inventory system entirely.",
        "To automate the creation of new product SKUs.",
        "To provide a new user interface for stock management within Optimizely.",
        "To integrate Optimizely with an existing, specialized internal system.\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your OCP-hosted Opal tool needs to interact with a third-party service that requires OAuth authentication.",
      "question": "How does OCP facilitate the implementation of OAuth flows for your tool?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "By adding an oauth_button to forms/settings.xml and implementing onAuthorizationRequest and onAuthorizationGrant in your Lifecycle class.",
        "It automatically handles all OAuth complexities without any developer intervention.",
        "OAuth is not supported for OCP-hosted Opal tools.",
        "You must manually manage all token storage and refresh logic within your tool's code.\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A web development agency is building an Opal tool that fetches real-time weather data from a public API and displays it as a dynamic widget on a client's Optimizely-powered website. The tool needs to handle asynchronous web requests efficiently.",
      "question": "Which Optimizely Opal SDK would be most appropriate for this web-centric, I/O-bound task?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "C# SDK",
        "Python SDK",
        "Java SDK",
        "JavaScript/TypeScript SDK\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A data engineer is setting up a new Python project to build an Optimizely Opal tool that will perform complex data transformations. They've created a virtual environment.",
      "question": "Which set of libraries is essential to install to get started with the Optimizely Opal Python SDK and run the tool as a web service?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "numpy, pandas, matplotlib",
        "optimizely-opal.opal-tools-sdk, requests, flask",
        "optimizely-opal.opal-tools-sdk, fastapi[all], uvicorn",
        "django, sqlalchemy, celery\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "After deploying a new Opal tool, the Optimizely platform is unable to discover it, even though the tool service is running. A network check reveals that the tool's server is behind a firewall.",
      "question": "Which specific endpoint must be publicly accessible for Optimizely Opal to initially find and register the tool?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "The /execute endpoint.",
        "The /discovery endpoint.",
        "The /healthcheck endpoint.",
        "The /status endpoint.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You need to build an Opal tool that fetches real-time stock prices from an external financial API and returns them to the user.",
      "question": "Which core capability of the JavaScript/TypeScript SDK, combined with standard Node.js practices, is most directly leveraged to facilitate this kind of external API interaction within your Opal tool?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Its support for asynchronous operations (e.g., fetch or axios) within the execute method.",
        "Its direct database connection pooling.",
        "Its ability to generate static HTML pages.",
        "Its built-in UI rendering engine for displaying external data.\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You are debugging an issue with your Opal tool deployed on OCP. You need to view the logs generated by your tool to understand its runtime behavior.",
      "question": "How can you access the logs for your OCP application?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Using the logger from @zaiusinc/app-sdk and accessing them in the OCP App Directory's Troubleshooting tab or via ocp app logs.",
        "By directly SSHing into the OCP server.",
        "Only through the external service that the tool integrates with.",
        "Logs are automatically sent to your registered email address.\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "An Optimizely Opal tool is designed to receive a customer's ID and return their recent purchase history. When Opal invokes this tool, it needs to send the customer ID as input.",
      "question": "How does Opal typically send the input parameters to a custom tool for execution?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "As query parameters in a GET request.",
        "As HTTP headers.",
        "As a JSON object in the body of a POST request.",
        "As part of the URL path.\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A custom Opal tool provides access to sensitive customer data stored in an external database. The tool developer needs to ensure that only authorized requests from Optimizely can trigger this tool.",
      "question": "Which security mechanism is crucial to implement for this custom tool to verify the identity of the caller?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "IP address whitelisting.",
        "Implementing bearer tokens or OAuth flows.",
        "Hardcoding API keys directly in the tool's code.",
        "Using a public API key without any secret.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A development team is preparing to deploy an Opal tool that connects to various external services, each requiring different API keys. The tool will be deployed across development, staging, and production environments.",
      "question": "What is the recommended best practice for managing these API keys and other sensitive configurations across different deployment environments?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Using environment variables or a secure configuration management system.",
        "Hardcoding all keys directly into the source code.",
        "Storing all keys in a publicly accessible configuration file.",
        "Emailing the keys to the deployment team for manual input.\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You've written an async Python function that contains the logic for your new Opal tool.",
      "question": "What is the primary mechanism provided by the optimizely-opal.opal-tools-sdk to expose this function as a callable Opal tool, making it discoverable by the platform?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Manually adding the function to a routes.py file.",
        "Applying the @tool decorator directly above the async function definition.",
        "Exporting the function using __all__ in __init__.py.",
        "Registering the function with a global ToolRegistry object.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You've defined several Opal tools in your TypeScript project and now need to make them accessible via an Express.js server.",
      "question": "How does the @optimizely-opal/opal-tools-sdk simplify the process of setting up the necessary /discovery endpoint and individual tool execution routes within your Express application?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "It requires manual definition of each route using app.get() and app.post().",
        "It generates a separate configuration file that needs to be imported into Express.",
        "It provides a getExpressMiddleware() function that automatically configures these endpoints when added to your Express app.",
        "It uses WebSockets for communication, bypassing the need for traditional HTTP endpoints.\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You've written a static C# method that contains the core logic for your new Opal tool.",
      "question": "What is the primary mechanism provided by the OptimizelyOpal.OpalToolsSDK to expose this method as a callable Opal tool, making it discoverable by the platform?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Implementing IOpalTool interface on the method's containing class.",
        "Applying the [Tool] attribute directly above the static method definition.",
        "Registering the method manually in Startup.cs using AddSingleton.",
        "Creating a ToolManifest.json file and including it in the project.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You are designing a new Opal tool called calculate_discount that takes a price (number) and a discount_percentage (number) as input. The tool should be clearly described in the Opal UI.",
      "question": "When defining this tool using the @tool() decorator, which properties are essential to include in the configuration object to ensure Opal correctly understands and displays your tool?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "version, author, license",
        "name, description, parameters",
        "endpoint, method, responseType",
        "dependencies, plugins, middlewares\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You are building an Opal tool that interacts with a sensitive internal API, and you need to ensure that only authenticated requests from Optimizely can trigger your tool.",
      "question": "What feature of the JavaScript/TypeScript SDK assists in implementing this security requirement?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "It automatically encrypts all incoming and outgoing data.",
        "It integrates directly with your cloud provider's IAM roles without any code.",
        "It requires you to hardcode API keys directly into the tool's execute method.",
        "It provides built-in Authentication Helpers to manage and validate authentication flows.\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your Python Opal tool interacts with a sensitive internal customer database. You need to ensure that only authenticated requests from Optimizely can trigger this tool.",
      "question": "What is the recommended approach within the Python SDK to implement this security requirement, leveraging FastAPI's capabilities?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Implementing requires_auth decorator and configuring authentication mechanisms provided by the SDK/FastAPI.",
        "Hardcoding an API key directly into the tool's logic.",
        "Using a simple if statement to check for a hardcoded password in the request body.",
        "Relying on network-level IP whitelisting only.\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your Opal tool, process_order, needs to accept an order_status parameter, but it should only allow specific values like \"\"pending\"\", \"\"shipped\"\", or \"\"delivered\"\".",
      "question": "How would you define this parameter in the parameters array using the JavaScript/TypeScript SDK to restrict its input to these predefined options?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Set type: ParameterType.String and add an options array.",
        "Set type: ParameterType.Enum and list the values.",
        "Use a custom validation function outside the parameter definition.",
        "Set type: ParameterType.String and include an enum array with the allowed values.\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your C# Opal tool interacts with a sensitive internal financial system. You need to ensure that only authenticated requests from Optimizely can trigger this tool.",
      "question": "What is the recommended approach within the C# SDK to implement this security requirement, leveraging ASP.NET Core's capabilities?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Implementing a custom IAuthorizationFilter for each tool method.",
        "Hardcoding an API key directly into the tool's logic.",
        "Relying on network-level IP whitelisting only.",
        "Applying the [RequiresAuth] attribute to the tool method, specifying a provider and scope bundle.\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "An Opal tool you developed is occasionally failing because users are providing invalid input (e.g., a non-numeric value for a number parameter).",
      "question": "What is the recommended approach within the JavaScript/TypeScript SDK to implement robust error handling and parameter validation to prevent such failures and provide meaningful feedback?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Rely solely on client-side validation in the Opal UI.",
        "Disable parameter validation entirely to avoid errors.",
        "Implement try...catch blocks within the execute method and leverage the SDK's built-in validation mechanisms (e.g., ParameterType and required flags).",
        "Return a generic \"\"Error\"\" message for all invalid inputs.\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your Python-based Opal tool is running as a FastAPI application. You've defined several tools using the @tool decorator.",
      "question": "How does the Python SDK, in conjunction with FastAPI, simplify the process of setting up the necessary /discovery endpoint and individual tool execution routes?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "It requires you to define each endpoint manually using @app.get() and @app.post().",
        "The OpalToolsService automatically configures these endpoints when initialized with the FastAPI app and tools are registered.",
        "It generates a separate YAML configuration file that FastAPI then imports.",
        "It uses a custom WebSocket protocol, eliminating the need for traditional HTTP endpoints.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You are developing an Opal tool that updates a user's profile, which involves multiple nested fields like address (with street, city, zip_code), contact_info (with email, phone), and preferences.",
      "question": "Which Python library and its feature are highly recommended for defining such complex, nested parameter structures and ensuring robust data validation for your Opal tool?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "dataclasses for defining data classes.",
        "json module for manual JSON parsing.",
        "collections.namedtuple for structured data.",
        "Pydantic models (e.g., BaseModel) for schema definition and validation.\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your Opal tool deployed on OCP needs to securely store an API key for an external service. This key should not be visible in plain text in any configuration forms.",
      "question": "Which OCP storage type is specifically designed for sensitive information like API keys?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Secrets store",
        "Key value store",
        "Settings store",
        "Shared key value store\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You are configuring your app.yml file for an OCP deployment. You have defined your Opal tool function within the functions section.",
      "question": "What is the purpose of the entry_point field for your function in app.yml?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "It specifies the URL where the tool will be hosted.",
        "It indicates the name of the class that implements your Opal tool logic.",
        "It defines the unique key for the function within OCP.",
        "It sets the version number for the deployed function.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You want to allow users to configure a specific setting for your Opal tool directly within the OCP App Directory UI (e.g., an external service endpoint).",
      "question": "Where would you define the input fields for these custom settings in your OCP application?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "In app.yml under the functions section.",
        "In src/lifecycle/Lifecycle.ts directly.",
        "As environment variables that users manually set.",
        "In forms/settings.xml.\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A developer is choosing between Python and another language for an Opal tool that needs to expose interactive API documentation and automatically validate incoming request data.",
      "question": "What specific feature of FastAPI, which integrates seamlessly with the Python SDK, provides these benefits out-of-the-box?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Its automatic generation of Swagger UI/ReDoc documentation and Pydantic-based data validation.",
        "Its asynchronous I/O capabilities.",
        "Its built-in ORM for database interactions.",
        "Its support for multiple templating engines.\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A marketing analyst wants an Opal tool that can automatically fetch the latest conversion data from an external analytics platform, perform a quick A/B test significance calculation, and summarize the results.",
      "question": "Given Python's strengths, which type of integration and processing would this scenario primarily leverage within a Python-based Opal tool?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Frontend UI rendering and client-side scripting.",
        "Complex database schema migrations.",
        "Direct manipulation of Optimizely's internal UI components.",
        "Backend automation, data processing, and statistical analysis using specialized libraries.\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "An Optimizely DXP implementation requires an Opal tool to display real-time, interactive dashboards with complex visualizations. The data for these dashboards is processed by a separate, high-performance C# backend service.",
      "question": "Which architectural pattern for \"\"Hybrid Tools\"\" would best suit this scenario, allowing the strengths of both technologies to be leveraged?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A single C# tool handling both data processing and UI rendering.",
        "A JavaScript/TypeScript frontend Opal tool making API calls to a C# backend Opal tool.",
        "A Python tool for data processing, directly embedding a C# UI component.",
        "Storing all data in a shared database and having both C# and JS/TS tools directly access it.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "A developer is choosing C# for an Opal tool that needs to interact with various services and components within their ASP.NET Core application, such as logging, configuration, and custom data repositories.",
      "question": "What specific ASP.NET Core feature, which integrates seamlessly with the C# SDK, provides a robust way to manage and access these dependencies within the tool methods?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Global static classes for shared resources.",
        "Direct instantiation of services within the tool method.",
        "Dependency Injection (DI) through method parameters or constructor injection.",
        "Manual service location using a service locator pattern.\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your C#-based Opal tool needs to accept a productCode (string) and a quantity (integer).",
      "question": "How would you typically define these parameters in your C# tool method's signature to ensure proper type inference and validation by the SDK and ASP.NET Core?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "public static object GetProductInfo(string productCode, int quantity)",
        "public static object GetProductInfo(object parameters)",
        "public static object GetProductInfo(dynamic productCode, dynamic quantity)",
        "public static object GetProductInfo(Dictionary parameters)\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You are preparing your OCP application for its initial deployment to a sandbox environment. You've configured app.yml and validated it.",
      "question": "What ocp CLI command is used to build and publish your app before installing it?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "ocp app deploy",
        "ocp app install",
        "ocp app start",
        "ocp app prepare --bump-dev-version --publish\"\td"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "After deploying your Opal tool to OCP, you navigate to the Optimizely UI to register it. You need to provide a \"\"Discovery URL.\"\"",
      "question": "How is this \"\"Discovery URL\"\" typically obtained and managed within the OCP environment to ensure Opal can find your tool?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "It's dynamically generated by OCP and retrieved via App.functions.getEndpoints() during lifecycle events, then stored in settings.",
        "It's manually constructed by concatenating the OCP app ID and function name.",
        "It's a static URL provided by Optimizely that applies to all OCP functions.",
        "It's hardcoded into the tool's source code before deployment.\"\ta"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "Your OCP application hosts multiple distinct Opal tools, each with its own set of functionalities.",
      "question": "To ensure all these tools are properly discovered by Optimizely Opal, what is the recommended approach within OCP's configuration?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Combine all tool manifests into a single, large manifest file.",
        "Only the primary tool needs to be registered; others are automatically linked.",
        "Declare each new tool registry function in app.yml and expose each registry's URL separately.",
        "Use a single /discovery endpoint for the entire OCP application, regardless of the number of tools.\"\tc"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    },
    {
      "scenario": "You've made changes to your Opal tool's manifest (e.g., added a new parameter) and published a new version of your OCP app. However, Optimizely Opal isn't immediately recognizing these changes.",
      "question": "What action must you take within Optimizely Opal's UI to ensure it updates its configuration with the latest tool manifest from your OCP deployment?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Delete and re-add the tool registry entirely.",
        "Click the Sync button in Opal's tool registry UI.",
        "Restart the OCP application from the command line.",
        "Wait for an automatic daily synchronization process.\"\tb"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Đúng rồi.",
      "messageForIncorrectAnswer": "Sai rồi, thử câu khác.",
      "point": "1",
      "segment": "opal"
    }
  ],
};

export default quiz;
