


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
        
    
      export const flashCardModel = model.startChat({
          generationConfig,
          history: [
            {
              role: "user",
              parts: [
                {text: "Generate the flashcard on topic: Flutter Fundamentals, User Interface (UI) Development, Basic App Navigation in JSON format with front back content, Maximum 15"},
              ],
            },
            {
              role: "model",
              parts: [
                {text: "```json\n[\n  {\n    \"front\": \"What is a Widget in Flutter?\",\n    \"back\": \"The fundamental building block of Flutter UI. Everything you see on the screen is a widget.\"\n  },\n  {\n    \"front\": \"What are the two main types of Widgets?\",\n    \"back\": \"StatelessWidget and StatefulWidget.\"\n  },\n  {\n    \"front\": \"When to use StatelessWidget?\",\n    \"back\": \"For widgets whose state (data) doesn't change over time.\"\n  },\n  {\n    \"front\": \"When to use StatefulWidget?\",\n    \"back\": \"For widgets whose state (data) changes over time, requiring rebuilds.\"\n  },\n  {\n    \"front\": \"Explain the `build()` method.\",\n    \"back\": \"In a widget, this method describes the UI based on the widget's state. It's called whenever the widget needs to be redrawn.\"\n  },\n  {\n    \"front\": \"What is a `BuildContext`?\",\n    \"back\": \"Provides information about the widget's position in the widget tree.\"\n  },\n  {\n    \"front\": \"Name three common layout widgets.\",\n    \"back\": \"Row, Column, and Stack.\"\n  },\n  {\n    \"front\": \"What does a `Row` widget do?\",\n    \"back\": \"Arranges children horizontally.\"\n  },\n  {\n    \"front\": \"What does a `Column` widget do?\",\n    \"back\": \"Arranges children vertically.\"\n  },\n  {\n    \"front\": \"What does a `Stack` widget do?\",\n    \"back\": \"Overlays children on top of each other.\"\n  },\n  {\n    \"front\": \"How do you navigate to a new screen in Flutter?\",\n    \"back\": \"Using `Navigator.push()`.\"\n  },\n  {\n    \"front\": \"How do you return from a screen in Flutter?\",\n    \"back\": \"Using `Navigator.pop()`.\"\n  },\n  {\n    \"front\": \"What is a `MaterialApp`?\",\n    \"back\": \"A widget that provides a Material Design theme and manages navigation.\"\n  },\n  {\n    \"front\": \"What is a `Route`?\",\n    \"back\": \"A description of how to transition between screens in a navigation stack.\"\n  },\n  {\n    \"front\": \"What is the purpose of `Key` in widgets?\",\n    \"back\": \"To uniquely identify a widget, especially useful when manipulating or replacing widgets in a tree. Helps in efficient updates.\"\n  }\n]\n```\n"},
              ],
            },
          ],
        });






      export const quizModel = model.startChat({
          generationConfig,
          history: [
            {
              role: "user",
              parts: [
                {text: "Generate Quiz on topic: Flutter Fundamentals, User Interface (UI) Development, Basic App Navigation with Question and Options along with correct answer in JSON format"},
              ],
            },
            {
              role: "model",
              parts: [
                {text: "```json\n{\n  \"quizTitle\": \"Flutter Fundamentals & UI Development\",\n  \"questions\": [\n    {\n      \"question\": \"What is the primary programming language used in Flutter?\",\n      \"options\": [\"Java\", \"Kotlin\", \"Dart\", \"Swift\"],\n      \"correctAnswer\": \"Dart\"\n    },\n    {\n      \"question\": \"Which widget is the root of most Flutter applications?\",\n      \"options\": [\"Container\", \"Row\", \"Column\", \"MaterialApp\"],\n      \"correctAnswer\": \"MaterialApp\"\n    },\n    {\n      \"question\": \"What is the purpose of a StatefulWidget in Flutter?\",\n      \"options\": [\"To create a static UI that doesn't change\", \"To create a UI that can rebuild based on changes in state\", \"To manage app-wide themes\", \"To handle user input\"],\n      \"correctAnswer\": \"To create a UI that can rebuild based on changes in state\"\n    },\n    {\n      \"question\": \"Which widget is used to arrange children horizontally in a row?\",\n      \"options\": [\"Column\", \"Row\", \"Stack\", \"Container\"],\n      \"correctAnswer\": \"Row\"\n    },\n    {\n      \"question\": \"How do you navigate from one screen to another in Flutter using Navigator?\",\n      \"options\": [\"Navigator.push(context, MaterialPageRoute(builder: (context) => YourNewScreen()));\", \"Navigator.pop(context);\", \"Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => YourNewScreen()));\", \"All of the above\"],\n      \"correctAnswer\": \"Navigator.push(context, MaterialPageRoute(builder: (context) => YourNewScreen()));\"\n    },\n    {\n      \"question\": \"What does the `BuildContext` represent in Flutter?\",\n      \"options\": [\"The current screen's dimensions\", \"The entire app's state\", \"The widget tree's location of a given widget\", \"The user's device information\"],\n      \"correctAnswer\": \"The widget tree's location of a given widget\"\n    },\n    {\n      \"question\": \"Which widget is best suited for displaying a list of items that can be scrolled?\",\n      \"options\": [\"ListView\", \"GridView\", \"Column\", \"Row\"],\n      \"correctAnswer\": \"ListView\"\n    },\n    {\n      \"question\": \"What is the purpose of a `Key` in Flutter widgets?\",\n      \"options\": [\"To uniquely identify a widget\", \"To determine the widget's position in the layout\", \"To specify the widget's color\", \"To define the widget's size\"],\n      \"correctAnswer\": \"To uniquely identify a widget\"\n    },\n    {\n      \"question\": \"What does the `StatelessWidget` do?\",\n      \"options\": [\"It rebuilds its UI when state changes.\", \"It holds state data that can change over time.\", \"It is a widget that never changes its UI after it's built.\", \"It handles user interactions.\"],\n      \"correctAnswer\": \"It is a widget that never changes its UI after it's built.\"\n    },\n    {\n      \"question\": \"What is the method used to update the UI in a StatefulWidget?\",\n      \"options\": [\"setState()\", \"updateUI()\", \"refresh()\", \"repaint()\"],\n      \"correctAnswer\": \"setState()\"\n    }\n  ]\n}\n```\n"},
              ],
            },
          ],
        });