


    const {
        GoogleGenerativeAI,
        HarmCategory,
        HarmBlockThreshold,
      } = require("@google/generative-ai");
      
      const apiKey =  process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey);
      
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
      
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      };
      

      export  const courseOutline = model.startChat({
          generationConfig,
          history: [
            {
              role: "user",
              parts: [
                {text: "Generate a study material for python for exam and level of difficulty will be easy with summary of course, List of Chapters along with summery for each chapter, Topic list in each chapter, All result in JSON format"},
              ],
            },
            {
              role: "model",
              parts: [
                {text: "```json\n{\n  \"courseSummary\": \"This introductory Python course covers the fundamental concepts of programming using Python.  It's designed for beginners with little to no prior programming experience.  The course focuses on practical application and building a solid foundation for further learning.\",\n  \"chapters\": [\n    {\n      \"chapterTitle\": \"Introduction to Python\",\n      \"chapterSummary\": \"This chapter introduces the basics of Python, including its history, applications, and installation.  It covers setting up your environment and writing your first Python program.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"Python's History and Applications\",\n        \"Installing Python\",\n        \"Setting up a Development Environment (IDE/Text Editor)\",\n        \"Running your first Python program\",\n        \"Basic Syntax (Indentation, Comments)\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Data Types and Variables\",\n      \"chapterSummary\": \"This chapter explores the fundamental data types in Python, such as integers, floats, strings, and booleans. It also introduces the concept of variables and how to assign values to them.\",\n      \"topics\": [\n        \"Integers\",\n        \"Floats\",\n        \"Strings\",\n        \"Booleans\",\n        \"Variables and Assignment\",\n        \"Type Conversion (Casting)\",\n        \"Basic Input and Output (print(), input())\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Operators and Expressions\",\n      \"chapterSummary\": \"This chapter covers arithmetic, comparison, logical, and assignment operators. It demonstrates how to build expressions and evaluate their results.\",\n      \"topics\": [\n        \"Arithmetic Operators (+, -, *, /, //, %, **)\",\n        \"Comparison Operators (==, !=, >, <, >=, <=)\",\n        \"Logical Operators (and, or, not)\",\n        \"Assignment Operators (=, +=, -=, *=, /=)\",\n        \"Operator Precedence\",\n        \"Building Simple Expressions\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Control Flow (Conditional Statements)\",\n      \"chapterSummary\": \"This chapter introduces conditional statements such as `if`, `elif`, and `else` to control the flow of execution in your programs based on certain conditions.\",\n      \"topics\": [\n        \"if Statements\",\n        \"if-else Statements\",\n        \"if-elif-else Statements\",\n        \"Nested if Statements\",\n        \"Boolean Expressions in Conditional Statements\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Loops (Iteration)\",\n      \"chapterSummary\": \"This chapter explains how to use loops (`for` and `while`) to repeat blocks of code.  It covers iterating through sequences and controlling loop execution.\",\n      \"topics\": [\n        \"for Loops\",\n        \"while Loops\",\n        \"Loop Control Statements (break, continue)\",\n        \"Nested Loops\",\n        \"Iterating through Strings and Lists\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Data Structures: Lists and Tuples\",\n      \"chapterSummary\": \"This chapter introduces two fundamental data structures: lists (mutable) and tuples (immutable). It covers creating, accessing, and manipulating these data structures.\",\n      \"topics\": [\n        \"Lists: Creation, Accessing Elements, Slicing\",\n        \"List Methods (append(), insert(), remove(), pop(), etc.)\",\n        \"Tuples: Creation, Accessing Elements\",\n        \"Difference between Lists and Tuples\",\n        \"Basic List Comprehension\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Functions\",\n      \"chapterSummary\": \"This chapter explains how to create and use functions to modularize your code, improve readability, and promote reusability.\",\n      \"topics\": [\n        \"Defining Functions\",\n        \"Function Parameters and Arguments\",\n        \"Return Values\",\n        \"Function Scope\",\n        \"Default Arguments\",\n        \"Keyword Arguments\"\n      ]\n    }\n  ]\n}\n```\n"},
              ],
            },
          ],
        });
      
   
      export  const createChapterModel = model.startChat({
          generationConfig,
          history: [
            {
              role: "user",
              parts: [
                {text: "Generate exam material detail content for each chapter Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTMLK, Head, Body, title tag), The chapter is   {\n      \"chapterTitle\": \"Introduction to Java\",\n      \"chapterSummary\": \"This chapter introduces the basics of Java, including its history, applications, and installation. It covers setting up your environment and writing your first Java program.\",\n      \"topics\": [\n        \"What is Java?\",\n        \"Java's History and Applications\",\n        \"Installing the JDK (Java Development Kit)\",\n        \"Setting up a Development Environment (IDE like Eclipse or IntelliJ)\",\n        \"Compiling and Running a Java Program\",\n        \"Basic Syntax (Semicolons, Braces)\",\n        \"Understanding the `main` method\"\n      ]\n    }"},
              ],
            },
            {
              role: "model",
              parts: [
                {text: "```html\n<h2>Introduction to Java</h2>\n\n<h3>What is Java?</h3>\n<p>Explain Java's nature as a high-level, object-oriented, platform-independent programming language.  Discuss its key features:  robustness, security, portability, and performance.  Provide examples of where Java is used (web applications, mobile apps, enterprise software, etc.).</p>\n\n<h3>Java's History and Applications</h3>\n<p>Briefly trace the history of Java's development, mentioning key milestones and versions.  Elaborate on the wide range of Java applications, including but not limited to: web development (servlets, JSPs, Spring Framework), Android app development, desktop applications (Swing, JavaFX), big data processing (Hadoop, Spark), and embedded systems.</p>\n\n<h3>Installing the JDK (Java Development Kit)</h3>\n<p>Provide step-by-step instructions for downloading and installing the JDK from Oracle's website (or a suitable alternative like OpenJDK).  Explain the importance of setting the JAVA_HOME environment variable (include platform-specific instructions for Windows, macOS, and Linux). Verify the installation by checking the Java version using the command line.</p>\n\n<h3>Setting up a Development Environment (IDE like Eclipse or IntelliJ)</h3>\n<p>Discuss the benefits of using an Integrated Development Environment (IDE).  Provide instructions for downloading, installing, and configuring either Eclipse or IntelliJ IDEA.  Explain how to create a new Java project, and how to navigate the IDE's interface.</p>\n\n<h3>Compiling and Running a Java Program</h3>\n<p>Explain the two-step process of compiling and running Java code.  Describe the role of the Java compiler (javac) in translating source code (.java files) into bytecode (.class files). Explain how the Java Virtual Machine (JVM) executes the bytecode.  Provide examples of command-line compilation and execution using the command prompt or terminal.</p>\n\n<h3>Basic Syntax (Semicolons, Braces)</h3>\n<p>Explain the fundamental syntax rules of Java.  Discuss the importance of semicolons to terminate statements.  Explain the use of curly braces `{}` to define code blocks (e.g., within methods, loops, conditional statements).  Illustrate with code examples.</p>\n\n<h3>Understanding the `main` method</h3>\n<p>Explain the significance of the `main` method as the entry point for Java applications.  Describe its signature: `public static void main(String[] args)`. Explain the purpose of each keyword and the `args` parameter (command-line arguments). Provide examples of simple `main` methods and their execution.</p>\n\n```\n"},
              ],
            },
          ],
        });
        
    