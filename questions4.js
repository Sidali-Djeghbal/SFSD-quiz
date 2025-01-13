let questions4 = [
    {
        numb: 1,
        question: "Which of the following best defines a database?",
        answer: "B) A large set of structured, organized information stored on permanent storage",
        options: [
            "A) A collection of unstructured data stored in files",
            "B) A large set of structured, organized information stored on permanent storage",
            "C) A set of unrelated files stored on a computer",
            "D) A temporary storage space for data"
        ]
    },
    {
        numb: 2,
        question: "What is a key difference between files and databases in terms of structure?",
        answer: "B) Files are flat or hierarchical, while databases are organized into tables and relationships",
        options: [
            "A) Files are organized into tables, while databases are flat or hierarchical",
            "B) Files are flat or hierarchical, while databases are organized into tables and relationships",
            "C) Files allow relationships between tables, while databases do not",
            "D) Files use SQL for queries, while databases do not"
        ]
    },
    {
        numb: 3,
        question: "Which of the following is a characteristic of databases but not of files?",
        answer: "A) Data integrity mechanisms",
        options: [
            "A) Data integrity mechanisms",
            "B) Manual data management",
            "C) Limited query capabilities",
            "D) Basic access control"
        ]
    },
    {
        numb: 4,
        question: "In relational databases, how are relationships between tables established?",
        answer: "A) Using primary and foreign keys",
        options: [
            "A) Using primary and foreign keys",
            "B) Using hierarchical structures",
            "C) Using flat file structures",
            "D) Using unstructured data"
        ]
    },
    {
        numb: 5,
        question: "Which of the following is an example of a NoSQL database?",
        answer: "C) MongoDB",
        options: [
            "A) MySQL",
            "B) PostgreSQL",
            "C) MongoDB",
            "D) Oracle Database"
        ]
    },
    {
        numb: 6,
        question: "What is a primary advantage of using a database over individual files?",
        answer: "B) Databases provide centralized and automated data management",
        options: [
            "A) Databases are easier to manage manually",
            "B) Databases provide centralized and automated data management",
            "C) Databases do not require any structure",
            "D) Databases are less efficient for complex queries"
        ]
    },
    {
        numb: 7,
        question: "Which of the following is a characteristic of object-oriented databases?",
        answer: "B) They store data in the form of objects, similar to object-oriented programming",
        options: [
            "A) They store data in the form of tables",
            "B) They store data in the form of objects, similar to object-oriented programming",
            "C) They are not suitable for complex data structures",
            "D) They do not support relationships between data"
        ]
    },
    {
        numb: 8,
        question: "What is the primary role of a Database Management System (DBMS)?",
        answer: "B) To manipulate and manage information stored in a database",
        options: [
            "A) To store unstructured data",
            "B) To manipulate and manage information stored in a database",
            "C) To create flat files for data storage",
            "D) To provide basic access control for files"
        ]
    },
    {
        numb: 9,
        question: "Which of the following is a key feature of a DBMS?",
        answer: "B) Physical independence",
        options: [
            "A) Data redundancy",
            "B) Physical independence",
            "C) Manual data management",
            "D) Limited query capabilities"
        ]
    },
    {
        numb: 10,
        question: "Which of the following is a well-known DBMS?",
        answer: "A) MongoDB",
        options: [
            "A) MongoDB",
            "B) Excel",
            "C) Notepad",
            "D) Word"
        ]
    },
    {
        numb: 11,
        question: "Which of the following is a characteristic of databases that ensures data accuracy and consistency?",
        answer: "A) Data integrity",
        options: [
            "A) Data integrity",
            "B) Data redundancy",
            "C) Manual data management",
            "D) Limited query capabilities"
        ]
    },
    {
        numb: 12,
        question: "What is the primary purpose of access control in databases?",
        answer: "B) To specify who can access, modify, or delete certain data",
        options: [
            "A) To allow anyone to modify the data",
            "B) To specify who can access, modify, or delete certain data",
            "C) To limit the number of queries that can be performed",
            "D) To reduce the efficiency of searches"
        ]
    },
    {
        numb: 13,
        question: "Which of the following is a characteristic of databases that allows for efficient searches?",
        answer: "B) Search efficiency",
        options: [
            "A) Data redundancy",
            "B) Search efficiency",
            "C) Manual data management",
            "D) Limited query capabilities"
        ]
    },
    {
        numb: 14,
        question: "What is the primary advantage of centralized data management in databases?",
        answer: "B) It allows for easier handling, updating, and retrieving of information",
        options: [
            "A) It makes data management more difficult",
            "B) It allows for easier handling, updating, and retrieving of information",
            "C) It increases data redundancy",
            "D) It limits the types of queries that can be performed"
        ]
    },
    {
        numb: 15,
        question: "Which of the following is a characteristic of databases that allows for the establishment of relationships between tables?",
        answer: "A) Data relationships",
        options: [
            "A) Data relationships",
            "B) Data redundancy",
            "C) Manual data management",
            "D) Limited query capabilities"
        ]
    },
    {
        numb: 16,
        question: "Which of the following is a characteristic of relational databases?",
        answer: "B) They organize data into tables with rows and columns",
        options: [
            "A) They store data in the form of objects",
            "B) They organize data into tables with rows and columns",
            "C) They are not suitable for complex data structures",
            "D) They do not support relationships between tables"
        ]
    },
    {
        numb: 17,
        question: "Which of the following is an example of a relational database?",
        answer: "C) MySQL",
        options: [
            "A) MongoDB",
            "B) Cassandra",
            "C) MySQL",
            "D) Redis"
        ]
    },
    {
        numb: 18,
        question: "Which of the following is a characteristic of NoSQL databases?",
        answer: "A) They are designed to handle non-relational data types",
        options: [
            "A) They are designed to handle non-relational data types",
            "B) They organize data into tables with rows and columns",
            "C) They are not suitable for complex data structures",
            "D) They do not support relationships between tables"
        ]
    },
    {
        numb: 19,
        question: "Which of the following is an example of a NoSQL database?",
        answer: "C) MongoDB",
        options: [
            "A) MySQL",
            "B) PostgreSQL",
            "C) MongoDB",
            "D) Oracle Database"
        ]
    },
    {
        numb: 20,
        question: "Which of the following is a characteristic of object-oriented databases?",
        answer: "B) They store data in the form of objects, similar to object-oriented programming",
        options: [
            "A) They store data in the form of tables",
            "B) They store data in the form of objects, similar to object-oriented programming",
            "C) They are not suitable for complex data structures",
            "D) They do not support relationships between data"
        ]
    },
    {
        numb: 21,
        question: "What is the primary role of a DBMS?",
        answer: "B) To manipulate and manage information stored in a database",
        options: [
            "A) To store unstructured data",
            "B) To manipulate and manage information stored in a database",
            "C) To create flat files for data storage",
            "D) To provide basic access control for files"
        ]
    },
    {
        numb: 22,
        question: "Which of the following is a key feature of a DBMS?",
        answer: "B) Physical independence",
        options: [
            "A) Data redundancy",
            "B) Physical independence",
            "C) Manual data management",
            "D) Limited query capabilities"
        ]
    },
    {
        numb: 23,
        question: "Which of the following is a well-known DBMS?",
        answer: "A) MongoDB",
        options: [
            "A) MongoDB",
            "B) Excel",
            "C) Notepad",
            "D) Word"
        ]
    },
    {
        numb: 24,
        question: "Which of the following is a responsibility of a DBMS?",
        answer: "B) To provide centralized data management",
        options: [
            "A) To ensure data redundancy",
            "B) To provide centralized data management",
            "C) To limit the types of queries that can be performed",
            "D) To reduce the efficiency of searches"
        ]
    },
    {
        numb: 25,
        question: "Which of the following is a feature of a DBMS that ensures data consistency?",
        answer: "A) Data integrity",
        options: [
            "A) Data integrity",
            "B) Data redundancy",
            "C) Manual data management",
            "D) Limited query capabilities"
        ]
    },
    {
        numb: 26,
        question: "What is the primary role of a storage engine in a DBMS?",
        answer: "A) To manage how data is stored, organized, and accessed in a database",
        options: [
            "A) To manage how data is stored, organized, and accessed in a database",
            "B) To create flat files for data storage",
            "C) To provide basic access control for files",
            "D) To limit the types of queries that can be performed"
        ]
    },
    {
        numb: 27,
        question: "Which of the following is a common database storage engine?",
        answer: "A) InnoDB",
        options: [
            "A) InnoDB",
            "B) Excel",
            "C) Notepad",
            "D) Word"
        ]
    },
    {
        numb: 28,
        question: "Which of the following is a type of file used by databases to store data?",
        answer: "D) All of the above",
        options: [
            "A) Data files",
            "B) Configuration files",
            "C) Log files",
            "D) All of the above"
        ]
    },
    {
        numb: 29,
        question: "What is the purpose of index files in a database?",
        answer: "B) To speed up search operations in the database",
        options: [
            "A) To store the actual data of the table",
            "B) To speed up search operations in the database",
            "C) To record transactions made on the database",
            "D) To define specific parameters of the database"
        ]
    },
    {
        numb: 30,
        question: "Which of the following is a feature of the MyISAM storage engine?",
        answer: "C) It uses three files to save each table: .frm, .myd, and .myi",
        options: [
            "A) It stores data and indexes in a single file",
            "B) It uses undo logs to manage transactions",
            "C) It uses three files to save each table: .frm, .myd, and .myi",
            "D) It reserves disk space to avoid fragmentation"
        ]
    },
    {
        numb: 31,
        question: "Which of the following is a characteristic of the MyISAM storage engine?",
        answer: "C) It uses three files to save each table: .frm, .myd, and .myi",
        options: [
            "A) It stores data and indexes in a single file",
            "B) It uses undo logs to manage transactions",
            "C) It uses three files to save each table: .frm, .myd, and .myi",
            "D) It reserves disk space to avoid fragmentation"
        ]
    },
    {
        numb: 32,
        question: "Which of the following is a characteristic of the InnoDB storage engine?",
        answer: "B) It uses undo logs to manage transactions",
        options: [
            "A) It stores data and indexes in separate files",
            "B) It uses undo logs to manage transactions",
            "C) It uses three files to save each table: .frm, .myd, and .myi",
            "D) It does not support transactions"
        ]
    },
    {
        numb: 33,
        question: "Which of the following is a feature of the InnoDB storage engine?",
        answer: "A) It stores data and indexes in a single file called .ibd",
        options: [
            "A) It stores data and indexes in a single file called .ibd",
            "B) It uses three files to save each table: .frm, .myd, and .myi",
            "C) It does not support transactions",
            "D) It does not use undo logs"
        ]
    },
    {
        numb: 34,
        question: "Which of the following is a feature of the MyISAM storage engine?",
        answer: "C) It uses three files to save each table: .frm, .myd, and .myi",
        options: [
            "A) It stores data and indexes in a single file",
            "B) It uses undo logs to manage transactions",
            "C) It uses three files to save each table: .frm, .myd, and .myi",
            "D) It reserves disk space to avoid fragmentation"
        ]
    },
    {
        numb: 35,
        question: "Which of the following is a feature of the InnoDB storage engine?",
        answer: "B) It uses undo logs to manage transactions",
        options: [
            "A) It stores data and indexes in separate files",
            "B) It uses undo logs to manage transactions",
            "C) It uses three files to save each table: .frm, .myd, and .myi",
            "D) It does not support transactions"
        ]
    },
    {
        numb: 36,
        question: "Which of the following is a characteristic of relational databases?",
        answer: "B) They organize data into tables with rows and columns",
        options: [
            "A) They store data in the form of objects",
            "B) They organize data into tables with rows and columns",
            "C) They are not suitable for complex data structures",
            "D) They do not support relationships between tables"
        ]
    },
    {
        numb: 37,
        question: "Which of the following is an example of a relational database?",
        answer: "C) MySQL",
        options: [
            "A) MongoDB",
            "B) Cassandra",
            "C) MySQL",
            "D) Redis"
        ]
    },
    {
        numb: 38,
        question: "Which of the following is a characteristic of NoSQL databases?",
        answer: "A) They are designed to handle non-relational data types",
        options: [
            "A) They are designed to handle non-relational data types",
            "B) They organize data into tables with rows and columns",
            "C) They are not suitable for complex data structures",
            "D) They do not support relationships between tables"
        ]
    },
    {
        numb: 39,
        question: "Which of the following is an example of a NoSQL database?",
        answer: "C) MongoDB",
        options: [
            "A) MySQL",
            "B) PostgreSQL",
            "C) MongoDB",
            "D) Oracle Database"
        ]
    },
    {
        numb: 40,
        question: "Which of the following is a characteristic of object-oriented databases?",
        answer: "B) They store data in the form of objects, similar to object-oriented programming",
        options: [
            "A) They store data in the form of tables",
            "B) They store data in the form of objects, similar to object-oriented programming",
            "C) They are not suitable for complex data structures",
            "D) They do not support relationships between data"
        ]
    },
    {
        numb: 41,
        question: "Which of the following is a characteristic of relational databases?",
        answer: "B) They organize data into tables with rows and columns",
        options: [
            "A) They store data in the form of objects",
            "B) They organize data into tables with rows and columns",
            "C) They are not suitable for complex data structures",
            "D) They do not support relationships between tables"
        ]
    },
    {
        numb: 42,
        question: "Which of the following is an example of a relational database?",
        answer: "C) MySQL",
        options: [
            "A) MongoDB",
            "B) Cassandra",
            "C) MySQL",
            "D) Redis"
        ]
    },
    {
        numb: 43,
        question: "Which of the following is a characteristic of NoSQL databases?",
        answer: "A) They are designed to handle non-relational data types",
        options: [
            "A) They are designed to handle non-relational data types",
            "B) They organize data into tables with rows and columns",
            "C) They are not suitable for complex data structures",
            "D) They do not support relationships between tables"
        ]
    },
    {
        numb: 44,
        question: "Which of the following is an example of a NoSQL database?",
        answer: "C) MongoDB",
        options: [
            "A) MySQL",
            "B) PostgreSQL",
            "C) MongoDB",
            "D) Oracle Database"
        ]
    },
    {
        numb: 45,
        question: "Which of the following is a characteristic of object-oriented databases?",
        answer: "B) They store data in the form of objects, similar to object-oriented programming",
        options: [
            "A) They store data in the form of tables",
            "B) They store data in the form of objects, similar to object-oriented programming",
            "C) They are not suitable for complex data structures",
            "D) They do not support relationships between data"
        ]
    }
];