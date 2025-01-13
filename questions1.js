let questions1 = [
    {
        numb: 1,
        question: "Which of the following is TRUE about primary memory?",
        answer: "C. It is used for temporarily storing data that the CPU needs to access quickly.",
        options: [
            "A. It is non-volatile and retains data when the computer is turned off.",
            "B. It is slower than secondary memory in terms of access speed.",
            "C. It is used for temporarily storing data that the CPU needs to access quickly.",
            "D. It has a larger storage capacity than secondary memory."
        ]
    },
    {
        numb: 2,
        question: "Which of the following is a characteristic of secondary memory?",
        answer: "C. It is used for long-term storage of data, even when the computer is powered off.",
        options: [
            "A. It is volatile and loses data when the computer is turned off.",
            "B. It is faster than primary memory in terms of access speed.",
            "C. It is used for long-term storage of data, even when the computer is powered off.",
            "D. It is more expensive than primary memory."
        ]
    },
    {
        numb: 3,
        question: "Which type of memory is used to store firmware and essential startup instructions?",
        answer: "C. ROM",
        options: [
            "A. RAM",
            "B. EEPROM",
            "C. ROM",
            "D. Cache Memory"
        ]
    },
    {
        numb: 4,
        question: "What is the main advantage of EEPROM over ROM?",
        answer: "B. It can be electrically erased and reprogrammed.",
        options: [
            "A. It is faster in terms of access speed.",
            "B. It can be electrically erased and reprogrammed.",
            "C. It is cheaper to produce.",
            "D. It has a larger storage capacity."
        ]
    },
    {
        numb: 5,
        question: "Which of the following is NOT a type of secondary memory?",
        answer: "C. RAM",
        options: [
            "A. Hard Drives",
            "B. USB Flash Drives",
            "C. RAM",
            "D. Optical Discs"
        ]
    },
    {
        numb: 6,
        question: "What is the primary purpose of primary memory in a computer system?",
        answer: "B. To provide high-speed access to data for the CPU.",
        options: [
            "A. To store data permanently, even when the computer is powered off.",
            "B. To provide high-speed access to data for the CPU.",
            "C. To act as a long-term repository for all data and software.",
            "D. To store firmware and startup instructions."
        ]
    },
    {
        numb: 7,
        question: "Which of the following is TRUE about the exchange between primary and secondary memory?",
        answer: "B. Data is transferred from secondary memory to primary memory when a program is launched.",
        options: [
            "A. Data is transferred from primary memory to secondary memory when a program is launched.",
            "B. Data is transferred from secondary memory to primary memory when a program is launched.",
            "C. Data is never transferred between primary and secondary memory.",
            "D. Data is only transferred from primary memory to secondary memory when the computer is turned off."
        ]
    },
    {
        numb: 8,
        question: "Which of the following is a disadvantage of primary memory?",
        answer: "B. It is more expensive than secondary memory.",
        options: [
            "A. It is non-volatile and retains data when the computer is turned off.",
            "B. It is more expensive than secondary memory.",
            "C. It has a larger storage capacity than secondary memory.",
            "D. It is slower than secondary memory in terms of access speed."
        ]
    },
    {
        numb: 9,
        question: "Which of the following is TRUE about ROM?",
        answer: "C. It retains data even when the computer is turned off.",
        options: [
            "A. It can be modified under normal operating conditions.",
            "B. It is used to store data that changes frequently.",
            "C. It retains data even when the computer is turned off.",
            "D. It is faster than RAM in terms of access speed."
        ]
    },
    {
        numb: 10,
        question: "Which of the following is a characteristic of secondary memory?",
        answer: "C. It has a larger storage capacity than primary memory.",
        options: [
            "A. It is volatile and loses data when the computer is turned off.",
            "B. It is used for temporarily storing data that the CPU needs to access quickly.",
            "C. It has a larger storage capacity than primary memory.",
            "D. It is faster than primary memory in terms of access speed."
        ]
    },
    {
        numb: 11,
        question: "What is the smallest unit of data in a file?",
        answer: "C. Bit",
        options: [
            "A. Byte",
            "B. Field",
            "C. Bit",
            "D. Record"
        ]
    },
    {
        numb: 12,
        question: "Which of the following encoding systems supports the largest set of characters, including emojis?",
        answer: "C. Unicode",
        options: [
            "A. ASCII",
            "B. Extended ASCII",
            "C. Unicode",
            "D. Binary"
        ]
    },
    {
        numb: 13,
        question: "In the context of file structure, what is a 'field'?",
        answer: "C. A grouping of multiple characters, each composed of 8 bits.",
        options: [
            "A. A sequence of bits representing a single character.",
            "B. A collection of records that pertain to a single subject.",
            "C. A grouping of multiple characters, each composed of 8 bits.",
            "D. A file that contains metadata and content."
        ]
    },
    {
        numb: 14,
        question: "Which of the following is TRUE about the relationship between bits and data encoding?",
        answer: "B. The number of possible combinations doubles with each additional bit.",
        options: [
            "A. A single bit can represent up to 8 different pieces of data.",
            "B. The number of possible combinations doubles with each additional bit.",
            "C. 4 bits can encode up to 32 different combinations.",
            "D. Bits are only used to encode numerical values."
        ]
    },
    {
        numb: 15,
        question: "What is the purpose of encoding in the context of digital data?",
        answer: "A. To convert data into a sequence of bits for storage and processing.",
        options: [
            "A. To convert data into a sequence of bits for storage and processing.",
            "B. To increase the size of data for better storage.",
            "C. To make data unreadable for security purposes.",
            "D. To reduce the speed of data processing."
        ]
    },
    {
        numb: 16,
        question: "Which of the following is TRUE about ASCII encoding?",
        answer: "B. It is a subset of Unicode.",
        options: [
            "A. It supports 256 characters, including accented letters and symbols.",
            "B. It is a subset of Unicode.",
            "C. It uses 16 bits to represent each character.",
            "D. It is primarily used for encoding images."
        ]
    },
    {
        numb: 17,
        question: "What is the binary representation of the decimal number 123?",
        answer: "A. 1111011",
        options: [
            "A. 1111011",
            "B. 1101111",
            "C. 1010111",
            "D. 1110111"
        ]
    },
    {
        numb: 18,
        question: "Which of the following is TRUE about encoding images?",
        answer: "C. Each pixel in a colored image is encoded using 24 bits.",
        options: [
            "A. Each pixel in a black and white image is encoded using 8 bits.",
            "B. Each pixel in a grayscale image is encoded using 1 bit.",
            "C. Each pixel in a colored image is encoded using 24 bits.",
            "D. Images cannot be encoded using binary data."
        ]
    },
    {
        numb: 19,
        question: "What is the purpose of sampling in the context of encoding sound waves?",
        answer: "A. To convert the analog signal into a digital format by dividing it into equal samples.",
        options: [
            "A. To convert the analog signal into a digital format by dividing it into equal samples.",
            "B. To increase the amplitude of the sound wave.",
            "C. To reduce the size of the sound file by compressing it.",
            "D. To convert the digital signal back into an analog signal."
        ]
    },
    {
        numb: 20,
        question: "Which of the following is TRUE about the byte as a unit of data measurement?",
        answer: "C. A byte is the fundamental unit of measuring data.",
        options: [
            "A. A byte consists of 16 bits.",
            "B. A kilobyte (KB) is equal to 1000 bytes.",
            "C. A byte is the fundamental unit of measuring data.",
            "D. A byte is used only for encoding text data."
        ]
    },
    {
        numb: 21,
        question: "What is the main difference between logical and physical files?",
        answer: "B. Logical files represent the abstract structure of data, while physical files represent the actual storage on a medium.",
        options: [
            "A. Logical files are stored on secondary memory, while physical files are stored in primary memory.",
            "B. Logical files represent the abstract structure of data, while physical files represent the actual storage on a medium.",
            "C. Logical files are always larger than physical files due to metadata overhead.",
            "D. Physical files are used for temporary storage, while logical files are used for permanent storage."
        ]
    },
    {
        numb: 22,
        question: "Which of the following is TRUE about physical records?",
        answer: "B. They are stored in blocks, which are the unit of transfer between RAM and secondary memory.",
        options: [
            "A. They are always the same size as logical records.",
            "B. They are stored in blocks, which are the unit of transfer between RAM and secondary memory.",
            "C. They do not contain any metadata.",
            "D. They are only used in primary memory."
        ]
    },
    {
        numb: 23,
        question: "What is the purpose of the 'header block' in a physical file?",
        answer: "B. To store metadata about the file, such as its size and location.",
        options: [
            "A. To store the actual data of the file.",
            "B. To store metadata about the file, such as its size and location.",
            "C. To act as a temporary workspace for the CPU.",
            "D. To store the logical structure of the file."
        ]
    },
    {
        numb: 24,
        question: "Which of the following is TRUE about the relationship between logical and physical files?",
        answer: "C. Logical files must be mapped onto physical files for storage.",
        options: [
            "A. Logical files are always stored in primary memory.",
            "B. Physical files are always stored in secondary memory.",
            "C. Logical files must be mapped onto physical files for storage.",
            "D. Physical files are an abstraction of logical files."
        ]
    },
    {
        numb: 25,
        question: "What is the main advantage of using logical files in a computer system?",
        answer: "B. They simplify data interaction by hiding the complexities of physical storage.",
        options: [
            "A. They provide a direct interface to physical storage.",
            "B. They simplify data interaction by hiding the complexities of physical storage.",
            "C. They are faster to access than physical files.",
            "D. They have a larger storage capacity than physical files."
        ]
    },
    {
        numb: 26,
        question: "Which of the following is TRUE about the size of logical records?",
        answer: "B. Logical records can have a variable size, depending on the data they contain.",
        options: [
            "A. Logical records are always fixed in size.",
            "B. Logical records can have a variable size, depending on the data they contain.",
            "C. Logical records are always larger than physical records.",
            "D. Logical records are only used in primary memory."
        ]
    },
    {
        numb: 27,
        question: "What is the purpose of the 'blocking factor' in the context of file storage?",
        answer: "A. To determine the number of logical records that fit into one physical block.",
        options: [
            "A. To determine the number of logical records that fit into one physical block.",
            "B. To calculate the total size of a file in bytes.",
            "C. To measure the speed of data transfer between primary and secondary memory.",
            "D. To determine the number of physical blocks required to store a logical file."
        ]
    },
    {
        numb: 28,
        question: "Which of the following is TRUE about internal fragmentation in physical files?",
        answer: "A. It occurs when a logical record does not fit exactly into a physical block.",
        options: [
            "A. It occurs when a logical record does not fit exactly into a physical block.",
            "B. It is caused by the use of logical files.",
            "C. It reduces the overall size of a file.",
            "D. It is only a problem in primary memory."
        ]
    },
    {
        numb: 29,
        question: "Which of the following is TRUE about the mapping of logical files to physical files?",
        answer: "C. It is a one-to-many mapping, where a single logical file can be split across multiple physical files.",
        options: [
            "A. It is a one-to-one mapping, where each logical file corresponds to exactly one physical file.",
            "B. It is a many-to-one mapping, where multiple logical files can be stored in a single physical file.",
            "C. It is a one-to-many mapping, where a single logical file can be split across multiple physical files.",
            "D. It is not necessary for efficient data management."
        ]
    },
    {
        numb: 30,
        question: "Which of the following is TRUE about the relationship between logical and physical records?",
        answer: "C. Logical records can be mapped to one or more physical records.",
        options: [
            "A. Logical records are always smaller than physical records.",
            "B. Logical records are always larger than physical records.",
            "C. Logical records can be mapped to one or more physical records.",
            "D. Logical records are only used in primary memory."
        ]
    },
    {
        numb: 31,
        question: "Which of the following is NOT a characteristic of a file?",
        answer: "D. Volatility",
        options: [
            "A. Size (Volume)",
            "B. Consultation Rate",
            "C. Blocking Factor",
            "D. Volatility"
        ]
    },
    {
        numb: 32,
        question: "What does the 'Blocking Factor' refer to in the context of files?",
        answer: "A. The ratio of the size of a logical record to the size of a physical record.",
        options: [
            "A. The ratio of the size of a logical record to the size of a physical record.",
            "B. The number of times a file is accessed in a given period.",
            "C. The total number of records in a file.",
            "D. The amount of storage space wasted due to internal fragmentation."
        ]
    },
    {
        numb: 33,
        question: "Which of the following is TRUE about the 'Consultation Rate' of a file?",
        answer: "A. It measures how often the file is read or consulted.",
        options: [
            "A. It measures how often the file is read or consulted.",
            "B. It measures the number of new records inserted into the file.",
            "C. It measures the total size of the file in bytes.",
            "D. It measures the speed at which data is transferred between primary and secondary memory."
        ]
    },
    {
        numb: 34,
        question: "Which of the following is TRUE about the 'Renewal Rate' of a file?",
        answer: "A. It measures the number of new records inserted into the file.",
        options: [
            "A. It measures the number of new records inserted into the file.",
            "B. It measures how often the file is read or consulted.",
            "C. It measures the total size of the file in bytes.",
            "D. It measures the speed at which data is transferred between primary and secondary memory."
        ]
    },
    {
        numb: 35,
        question: "Which of the following is TRUE about the 'Stability' of a file?",
        answer: "A. A file is considered stable if the number of records created is approximately equal to the number of records deleted.",
        options: [
            "A. A file is considered stable if the number of records created is approximately equal to the number of records deleted.",
            "B. A file is considered stable if it is stored in primary memory.",
            "C. A file is considered stable if it is stored in secondary memory.",
            "D. A file is considered stable if it is never accessed."
        ]
    },
    {
        numb: 36,
        question: "Which of the following is TRUE about the 'Growth' of a file?",
        answer: "A. It measures the increase in the number of created records compared to the number of deleted records.",
        options: [
            "A. It measures the increase in the number of created records compared to the number of deleted records.",
            "B. It measures the total size of the file in bytes.",
            "C. It measures how often the file is read or consulted.",
            "D. It measures the speed at which data is transferred between primary and secondary memory."
        ]
    },
    {
        numb: 37,
        question: "Which of the following is TRUE about the 'Activity Measures' of a file?",
        answer: "A. They include Consultation Rate, Consultation Frequency, Renewal Rate, and Stability.",
        options: [
            "A. They include Consultation Rate, Consultation Frequency, Renewal Rate, and Stability.",
            "B. They include only the total size of the file in bytes.",
            "C. They include only the number of records in the file.",
            "D. They include only the speed at which data is transferred between primary and secondary memory."
        ]
    },
    {
        numb: 38,
        question: "Which of the following is TRUE about the 'Consultation Frequency' of a file?",
        answer: "A. It measures how frequently the file is used.",
        options: [
            "A. It measures how frequently the file is used.",
            "B. It measures the total size of the file in bytes.",
            "C. It measures the number of new records inserted into the file.",
            "D. It measures the speed at which data is transferred between primary and secondary memory."
        ]
    },
    {
        numb: 39,
        question: "Which of the following is TRUE about the 'Size (Volume)' of a file?",
        answer: "A. It refers to the amount of data contained within the file, usually measured in bytes.",
        options: [
            "A. It refers to the amount of data contained within the file, usually measured in bytes.",
            "B. It refers to the number of records in the file.",
            "C. It refers to the speed at which data is transferred between primary and secondary memory.",
            "D. It refers to the number of times the file is accessed in a given period."
        ]
    },
    {
        numb: 40,
        question: "Which of the following is TRUE about the 'Blocking Factor' of a file?",
        answer: "A. It defines the number of logical records that fit into one physical record.",
        options: [
            "A. It defines the number of logical records that fit into one physical record.",
            "B. It defines the total size of the file in bytes.",
            "C. It defines the number of times the file is accessed in a given period.",
            "D. It defines the speed at which data is transferred between primary and secondary memory."
        ]
    },
    {
        numb: 41,
        question: "Which of the following is TRUE about static files?",
        answer: "C. They undergo infrequent changes after their initial creation.",
        options: [
            "A. They experience frequent insertions and deletions.",
            "B. They are ideal for environments requiring high data activity.",
            "C. They undergo infrequent changes after their initial creation.",
            "D. They are primarily used in databases and transaction logs."
        ]
    },
    {
        numb: 42,
        question: "What is the primary characteristic of a dynamic file?",
        answer: "C. It experiences frequent insertions, deletions, and updates.",
        options: [
            "A. It is stable and rarely changes over time.",
            "B. It is used for long-term data storage.",
            "C. It experiences frequent insertions, deletions, and updates.",
            "D. It is stored in primary memory."
        ]
    },
    {
        numb: 43,
        question: "Which of the following is TRUE about the 'Renewal Rate' of a static file?",
        answer: "A. It is low, as the content remains largely unchanged after its initial creation.",
        options: [
            "A. It is low, as the content remains largely unchanged after its initial creation.",
            "B. It is high, as the content changes frequently.",
            "C. It is not applicable to static files.",
            "D. It measures the total size of the file in bytes."
        ]
    },
    {
        numb: 44,
        question: "Which of the following is TRUE about the 'Consultation Rate' of a dynamic file?",
        answer: "A. It is significant, as the file is frequently accessed and modified.",
        options: [
            "A. It is significant, as the file is frequently accessed and modified.",
            "B. It is low, as the file is rarely accessed.",
            "C. It is not applicable to dynamic files.",
            "D. It measures the total size of the file in bytes."
        ]
    },
    {
        numb: 45,
        question: "Which of the following is TRUE about the 'Stability' of a dynamic file?",
        answer: "A. It is low, as the file experiences frequent changes.",
        options: [
            "A. It is low, as the file experiences frequent changes.",
            "B. It is high, as the file is rarely modified.",
            "C. It is not applicable to dynamic files.",
            "D. It measures the total size of the file in bytes."
        ]
    },
    {
        numb: 46,
        question: "Which of the following is TRUE about the 'Growth' of a dynamic file?",
        answer: "A. It is high, as the file experiences frequent insertions and deletions.",
        options: [
            "A. It is high, as the file experiences frequent insertions and deletions.",
            "B. It is low, as the file is rarely modified.",
            "C. It is not applicable to dynamic files.",
            "D. It measures the total size of the file in bytes."
        ]
    },
    {
        numb: 47,
        question: "Which of the following is TRUE about the 'Activity Measures' of a static file?",
        answer: "A. They are low, as the file is rarely accessed or modified.",
        options: [
            "A. They are low, as the file is rarely accessed or modified.",
            "B. They are high, as the file is frequently accessed and modified.",
            "C. They are not applicable to static files.",
            "D. They measure the total size of the file in bytes."
        ]
    },
    {
        numb: 48,
        question: "Which of the following is TRUE about the 'Consultation Frequency' of a dynamic file?",
        answer: "A. It is high, as the file is frequently accessed.",
        options: [
            "A. It is high, as the file is frequently accessed.",
            "B. It is low, as the file is rarely accessed.",
            "C. It is not applicable to dynamic files.",
            "D. It measures the total size of the file in bytes."
        ]
    },
    {
        numb: 49,
        question: "Which of the following is TRUE about the 'Renewal Rate' of a dynamic file?",
        answer: "A. It is high, as the file experiences frequent insertions and deletions.",
        options: [
            "A. It is high, as the file experiences frequent insertions and deletions.",
            "B. It is low, as the file is rarely modified.",
            "C. It is not applicable to dynamic files.",
            "D. It measures the total size of the file in bytes."
        ]
    },
    {
        numb: 50,
        question: "Which of the following is TRUE about the 'Stability' of a static file?",
        answer: "A. It is high, as the file is rarely modified.",
        options: [
            "A. It is high, as the file is rarely modified.",
            "B. It is low, as the file experiences frequent changes.",
            "C. It is not applicable to static files.",
            "D. It measures the total size of the file in bytes."
        ]
    },
    {
        numb: 51,
        question: "Which of the following is TRUE about a single-volume file?",
        answer: "A. It is entirely contained on a single storage medium.",
        options: [
            "A. It is entirely contained on a single storage medium.",
            "B. It is split into several parts, each stored on a different storage medium.",
            "C. It is used for large files that exceed the capacity of a single storage device.",
            "D. It is always stored in primary memory."
        ]
    },
    {
        numb: 52,
        question: "Which of the following is TRUE about a multi-volume file?",
        answer: "B. It is split into several parts, each stored on a different storage medium.",
        options: [
            "A. It is entirely contained on a single storage medium.",
            "B. It is split into several parts, each stored on a different storage medium.",
            "C. It is used for small files that fit within a single medium's capacity.",
            "D. It is always stored in primary memory."
        ]
    },
    {
        numb: 53,
        question: "Which of the following is TRUE about a multi-file volume?",
        answer: "A. It is a set of related files organized to function together.",
        options: [
            "A. It is a set of related files organized to function together.",
            "B. It is entirely contained on a single storage medium.",
            "C. It is used for small files that fit within a single medium's capacity.",
            "D. It is always stored in primary memory."
        ]
    },
    {
        numb: 54,
        question: "Which of the following is TRUE about the advantages of a multi-file volume?",
        answer: "A. It allows for more efficient data management and distribution.",
        options: [
            "A. It allows for more efficient data management and distribution.",
            "B. It is easier to manage due to its containment in a single location.",
            "C. It is used for small files that fit within a single medium's capacity.",
            "D. It is always stored in primary memory."
        ]
    },
    {
        numb: 55,
        question: "Which of the following is TRUE about the disadvantages of a multi-volume file?",
        answer: "A. It is more difficult to manage due to being split across multiple storage media.",
        options: [
            "A. It is more difficult to manage due to being split across multiple storage media.",
            "B. It is easier to manage due to its containment in a single location.",
            "C. It is used for small files that fit within a single medium's capacity.",
            "D. It is always stored in primary memory."
        ]
    },
    {
        numb: 56,
        question: "Which of the following is TRUE about the advantages of a single-volume file?",
        answer: "A. It is easier to manage due to its containment in a single location.",
        options: [
            "A. It is easier to manage due to its containment in a single location.",
            "B. It is more difficult to manage due to being split across multiple storage media.",
            "C. It is used for large files that exceed the capacity of a single storage device.",
            "D. It is always stored in primary memory."
        ]
    },
    {
        numb: 57,
        question: "Which of the following is TRUE about the disadvantages of a single-volume file?",
        answer: "A. It is limited by the capacity of a single storage medium.",
        options: [
            "A. It is limited by the capacity of a single storage medium.",
            "B. It is more difficult to manage due to being split across multiple storage media.",
            "C. It is used for large files that exceed the capacity of a single storage device.",
            "D. It is always stored in primary memory."
        ]
    },
    {
        numb: 58,
        question: "Which of the following is TRUE about the advantages of a multi-volume file?",
        answer: "A. It allows for the storage of large files that exceed the capacity of a single storage device.",
        options: [
            "A. It allows for the storage of large files that exceed the capacity of a single storage device.",
            "B. It is easier to manage due to its containment in a single location.",
            "C. It is used for small files that fit within a single medium's capacity.",
            "D. It is always stored in primary memory."
        ]
    },
    {
        numb: 59,
        question: "Which of the following is TRUE about the disadvantages of a multi-file volume?",
        answer: "A. It requires more complex data management strategies.",
        options: [
            "A. It requires more complex data management strategies.",
            "B. It is easier to manage due to its containment in a single location.",
            "C. It is used for small files that fit within a single medium's capacity.",
            "D. It is always stored in primary memory."
        ]
    },
    {
        numb: 60,
        question: "Which of the following is TRUE about the advantages of a multi-file volume?",
        answer: "A. It allows for more efficient data management and distribution.",
        options: [
            "A. It allows for more efficient data management and distribution.",
            "B. It is easier to manage due to its containment in a single location.",
            "C. It is used for small files that fit within a single medium's capacity.",
            "D. It is always stored in primary memory."
        ]
    },
    {
        numb: 61,
        question: "Which of the following is an example of a permanent file?",
        answer: "C. A file containing employee records.",
        options: [
            "A. A transaction file used to update a sales database.",
            "B. A temporary file generated during complex calculations.",
            "C. A file containing employee records.",
            "D. A file used to store intermediate results in a data processing pipeline."
        ]
    },
    {
        numb: 62,
        question: "What is the primary purpose of a transaction file?",
        answer: "B. To record all the transactions or changes that need to be applied to a permanent file.",
        options: [
            "A. To store data that holds significant importance and does not require frequent modifications.",
            "B. To record all the transactions or changes that need to be applied to a permanent file.",
            "C. To temporarily hold data that is essential for ongoing processes.",
            "D. To store historical records of transactions and changes."
        ]
    },
    {
        numb: 63,
        question: "Which of the following is TRUE about a working file?",
        answer: "B. It is used to temporarily hold data that is essential for ongoing processes.",
        options: [
            "A. It is used to store data that holds significant importance and does not require frequent modifications.",
            "B. It is used to temporarily hold data that is essential for ongoing processes.",
            "C. It is used to store historical records of transactions and changes.",
            "D. It is used to record all the transactions or changes that need to be applied to a permanent file."
        ]
    },
    {
        numb: 64,
        question: "Which of the following is TRUE about an intermediate file?",
        answer: "A. It is used to store the results of a specific process, which can be used by subsequent processes.",
        options: [
            "A. It is used to store the results of a specific process, which can be used by subsequent processes.",
            "B. It is used to store data that holds significant importance and does not require frequent modifications.",
            "C. It is used to temporarily hold data that is essential for ongoing processes.",
            "D. It is used to record all the transactions or changes that need to be applied to a permanent file."
        ]
    },
    {
        numb: 65,
        question: "Which of the following is TRUE about an archive file?",
        answer: "A. It is used to store data from multiple periods throughout the lifespan of a program.",
        options: [
            "A. It is used to store data from multiple periods throughout the lifespan of a program.",
            "B. It is used to store data that holds significant importance and does not require frequent modifications.",
            "C. It is used to temporarily hold data that is essential for ongoing processes.",
            "D. It is used to record all the transactions or changes that need to be applied to a permanent file."
        ]
    },
    {
        numb: 66,
        question: "Which of the following is TRUE about the lifespan of a working file?",
        answer: "A. It is limited to the duration of the specific operation or set of operations that necessitated its creation.",
        options: [
            "A. It is limited to the duration of the specific operation or set of operations that necessitated its creation.",
            "B. It is permanent and does not require frequent modifications.",
            "C. It is used to store historical records of transactions and changes.",
            "D. It is used to record all the transactions or changes that need to be applied to a permanent file."
        ]
    },
    {
        numb: 67,
        question: "Which of the following is TRUE about the lifespan of a transaction file?",
        answer: "D. It is used to record all the transactions or changes that need to be applied to a permanent file.",
        options: [
            "A. It is limited to the duration of the specific operation or set of operations that necessitated its creation.",
            "B. It is permanent and does not require frequent modifications.",
            "C. It is used to store historical records of transactions and changes.",
            "D. It is used to record all the transactions or changes that need to be applied to a permanent file."
        ]
    },
    {
        numb: 68,
        question: "Which of the following is TRUE about the lifespan of an intermediate file?",
        answer: "D. It is used to store the results of a specific process, which can be used by subsequent processes.",
        options: [
            "A. It is limited to the duration of the specific operation or set of operations that necessitated its creation.",
            "B. It is permanent and does not require frequent modifications.",
            "C. It is used to store historical records of transactions and changes.",
            "D. It is used to store the results of a specific process, which can be used by subsequent processes."
        ]
    },
    {
        numb: 69,
        question: "Which of the following is TRUE about the lifespan of an archive file?",
        answer: "A. It is permanent and does not require frequent modifications.",
        options: [
            "A. It is permanent and does not require frequent modifications.",
            "B. It is limited to the duration of the specific operation or set of operations that necessitated its creation.",
            "C. It is used to temporarily hold data that is essential for ongoing processes.",
            "D. It is used to record all the transactions or changes that need to be applied to a permanent file."
        ]
    },
    {
        numb: 70,
        question: "Which of the following is TRUE about the lifespan of a permanent file?",
        answer: "A. It is permanent and does not require frequent modifications.",
        options: [
            "A. It is permanent and does not require frequent modifications.",
            "B. It is limited to the duration of the specific operation or set of operations that necessitated its creation.",
            "C. It is used to temporarily hold data that is essential for ongoing processes.",
            "D. It is used to record all the transactions or changes that need to be applied to a permanent file."
        ]
    },
    {
        numb: 71,
        question: "Which of the following C functions is used to open a file for reading?",
        answer: "B. fopen(filename, 'r')",
        options: [
            "A. fopen(filename, 'w')",
            "B. fopen(filename, 'r')",
            "C. fopen(filename, 'a')",
            "D. fopen(filename, 'b')"
        ]
    },
    {
        numb: 72,
        question: "What is the purpose of the 'close' function in C?",
        answer: "B. To release system resources associated with a file and ensure data is saved properly.",
        options: [
            "A. To open a file for reading or writing.",
            "B. To release system resources associated with a file and ensure data is saved properly.",
            "C. To delete a file from the file system.",
            "D. To rename or move a file within the file system."
        ]
    },
    {
        numb: 73,
        question: "Which of the following operations involves dividing a file into multiple smaller files based on predefined criteria?",
        answer: "C. File Splitting",
        options: [
            "A. File Merging",
            "B. File Sorting",
            "C. File Splitting",
            "D. File Extraction"
        ]
    },
    {
        numb: 74,
        question: "Which of the following C functions is used to delete a file?",
        answer: "A. remove(filename)",
        options: [
            "A. remove(filename)",
            "B. fclose(filename)",
            "C. rename(old_filename, new_filename)",
            "D. fopen(filename, 'w')"
        ]
    },
    {
        numb: 75,
        question: "Which of the following C functions is used to rename or move a file?",
        answer: "C. rename(old_filename, new_filename)",
        options: [
            "A. remove(filename)",
            "B. fclose(filename)",
            "C. rename(old_filename, new_filename)",
            "D. fopen(filename, 'w')"
        ]
    },
    {
        numb: 76,
        question: "Which of the following C functions is used to copy the contents of one file to another?",
        answer: "D. fread() and fwrite()",
        options: [
            "A. fopen(filename, 'r')",
            "B. fclose(filename)",
            "C. rename(old_filename, new_filename)",
            "D. fread() and fwrite()"
        ]
    },
    {
        numb: 77,
        question: "Which of the following C functions is used to sort the contents of a file?",
        answer: "A. qsort()",
        options: [
            "A. qsort()",
            "B. fclose(filename)",
            "C. rename(old_filename, new_filename)",
            "D. fopen(filename, 'w')"
        ]
    },
    {
        numb: 78,
        question: "Which of the following C functions is used to merge the contents of two files into a third file?",
        answer: "A. fread() and fwrite()",
        options: [
            "A. fread() and fwrite()",
            "B. fclose(filename)",
            "C. rename(old_filename, new_filename)",
            "D. fopen(filename, 'w')"
        ]
    },
    {
        numb: 79,
        question: "Which of the following C functions is used to extract specific data from a file based on selection criteria?",
        answer: "A. fread() and fwrite()",
        options: [
            "A. fread() and fwrite()",
            "B. fclose(filename)",
            "C. rename(old_filename, new_filename)",
            "D. fopen(filename, 'w')"
        ]
    },
    {
        numb: 80,
        question: "Which of the following C functions is used to create a new file?",
        answer: "A. fopen(filename, 'w')",
        options: [
            "A. fopen(filename, 'w')",
            "B. fclose(filename)",
            "C. rename(old_filename, new_filename)",
            "D. remove(filename)"
        ]
    }
];