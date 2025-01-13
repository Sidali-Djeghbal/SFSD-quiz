let questions3 = [
    {
        numb: 1,
        question: "Which file allocation method is most suitable for storing large multimedia files that require smooth playback?",
        answer: "B) Contiguous Allocation",
        options: [
            "A) Linked Allocation",
            "B) Contiguous Allocation",
            "C) Indexed-Linked Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 2,
        question: "In which file allocation method does fragmentation occur due to the difficulty of finding large contiguous blocks of free space?",
        answer: "B) Contiguous Allocation",
        options: [
            "A) Linked Allocation",
            "B) Contiguous Allocation",
            "C) Indexed-Linked Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 3,
        question: "Which of the following is a disadvantage of Linked Allocation?",
        answer: "B) Internal fragmentation",
        options: [
            "A) Direct access to blocks in constant time",
            "B) Internal fragmentation",
            "C) No extension issue",
            "D) Better utilization of storage space"
        ]
    },
    {
        numb: 4,
        question: "What is the primary purpose of the File Allocation Table (FAT) in Indexed-Linked Allocation?",
        answer: "B) To store pointers to the next block in the file",
        options: [
            "A) To store metadata about the file",
            "B) To store pointers to the next block in the file",
            "C) To store the file’s content",
            "D) To store the file’s name"
        ]
    },
    {
        numb: 5,
        question: "Which file allocation method is used by Unix file systems (UFS) and involves the use of Information Nodes (iNodes)?",
        answer: "D) Information Node Allocation",
        options: [
            "A) Contiguous Allocation",
            "B) Linked Allocation",
            "C) Indexed-Linked Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 6,
        question: "In Contiguous Allocation, what happens when new records are added to an ordered file?",
        answer: "C) Existing records are shifted to make space for the new records",
        options: [
            "A) New records are added at the end of the file",
            "B) New records are added at the beginning of the file",
            "C) Existing records are shifted to make space for the new records",
            "D) New records are stored in a separate file"
        ]
    },
    {
        numb: 7,
        question: "Which file allocation method is most efficient for managing small files such as configuration files?",
        answer: "D) Information Node Allocation",
        options: [
            "A) Linked Allocation",
            "B) Contiguous Allocation",
            "C) Indexed-Linked Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 8,
        question: "What is a major disadvantage of Indexed-Linked Allocation when dealing with large storage media?",
        answer: "A) It requires more storage space to save the FAT table in memory",
        options: [
            "A) It requires more storage space to save the FAT table in memory",
            "B) It leads to external fragmentation",
            "C) It is difficult to manage small files",
            "D) It requires shifting of records when new records are added"
        ]
    },
    {
        numb: 9,
        question: "Which file allocation method is particularly useful for ROM storage media like CD-ROMs?",
        answer: "B) Contiguous Allocation",
        options: [
            "A) Linked Allocation",
            "B) Contiguous Allocation",
            "C) Indexed-Linked Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 10,
        question: "In Linked Allocation, what is stored in each block along with a part of the file?",
        answer: "B) A pointer to the next block",
        options: [
            "A) Metadata about the file",
            "B) A pointer to the next block",
            "C) The file’s name",
            "D) The file’s size"
        ]
    },
    {
        numb: 11,
        question: "Which indexing method allows for binary searching even for variable-length items?",
        answer: "A) Dense Index",
        options: [
            "A) Dense Index",
            "B) Sparse Index",
            "C) Single-Level Index",
            "D) Multi-Level Index"
        ]
    },
    {
        numb: 12,
        question: "In a Dense Index, what is the relationship between the index locations and the data?",
        answer: "B) Each record has a position in the index file",
        options: [
            "A) There is no direct correspondence",
            "B) Each record has a position in the index file",
            "C) The index locations are randomly assigned",
            "D) The index is only used for sorted files"
        ]
    },
    {
        numb: 13,
        question: "What is the main advantage of using a Sparse Index over a Dense Index?",
        answer: "D) It requires less storage space",
        options: [
            "A) It allows for quick access to the data",
            "B) It is practical for unsorted files",
            "C) It is more efficient for managing large files",
            "D) It requires less storage space"
        ]
    },
    {
        numb: 14,
        question: "In Single-Level Indexing, how is a new record inserted into the data file?",
        answer: "B) It is inserted at the end of the file",
        options: [
            "A) It is inserted at the beginning of the file",
            "B) It is inserted at the end of the file",
            "C) It is inserted in the middle of the file",
            "D) It is inserted in a separate file"
        ]
    },
    {
        numb: 15,
        question: "What is the primary purpose of a Two-Level Index?",
        answer: "C) To handle large index files that exceed primary memory capacity",
        options: [
            "A) To reduce the size of the index file",
            "B) To allow for binary searching in the index file",
            "C) To handle large index files that exceed primary memory capacity",
            "D) To improve the performance of the data file"
        ]
    },
    {
        numb: 16,
        question: "In Multi-Level Indexing, what is the role of the top-level index?",
        answer: "A) It contains pointers to lower-level indices",
        options: [
            "A) It contains pointers to lower-level indices",
            "B) It contains the actual data",
            "C) It is used for binary searching",
            "D) It is used for sorting the data"
        ]
    },
    {
        numb: 17,
        question: "Which indexing method is most suitable for handling very large files that cannot be kept entirely in primary memory?",
        answer: "C) Multi-Level Index",
        options: [
            "A) Single-Level Index",
            "B) Two-Level Index",
            "C) Multi-Level Index",
            "D) B-Tree"
        ]
    },
    {
        numb: 18,
        question: "In a B-Tree, what is the role of the left and right subtrees?",
        answer: "A) They contain records with key values less than and greater than the parent record, respectively",
        options: [
            "A) They contain records with key values less than and greater than the parent record, respectively",
            "B) They contain metadata about the file",
            "C) They are used for sorting the data",
            "D) They are used for binary searching"
        ]
    },
    {
        numb: 19,
        question: "What is the main advantage of using an AVL Tree over a standard Binary Search Tree (BST)?",
        answer: "A) It ensures the tree remains balanced",
        options: [
            "A) It ensures the tree remains balanced",
            "B) It allows for faster insertion and deletion operations",
            "C) It requires less storage space",
            "D) It is easier to implement"
        ]
    },
    {
        numb: 20,
        question: "In B-Tree pagination, what is the purpose of organizing the tree into pages?",
        answer: "A) To reduce the number of disk accesses needed to locate data",
        options: [
            "A) To reduce the number of disk accesses needed to locate data",
            "B) To improve the performance of the data file",
            "C) To allow for binary searching in the index file",
            "D) To handle large index files that exceed primary memory capacity"
        ]
    },
    {
        numb: 21,
        question: "What is the primary purpose of a hash function in hashing methods?",
        answer: "B) To transform file names or record keys into numerical values",
        options: [
            "A) To store metadata about the file",
            "B) To transform file names or record keys into numerical values",
            "C) To store the file's content",
            "D) To store the file's size"
        ]
    },
    {
        numb: 22,
        question: "Which of the following is a characteristic of a good hash function?",
        answer: "C) It should minimize collisions",
        options: [
            "A) It should produce different hash values for the same input",
            "B) It should generate a hash value of variable length",
            "C) It should minimize collisions",
            "D) It should be computationally inefficient"
        ]
    },
    {
        numb: 23,
        question: "What is a collision in the context of hashing methods?",
        answer: "A) When two different inputs produce the same hash value",
        options: [
            "A) When two different inputs produce the same hash value",
            "B) When the hash table is full",
            "C) When the hash function produces an incorrect hash value",
            "D) When the hash table is resized"
        ]
    },
    {
        numb: 24,
        question: "Which collision resolution technique involves storing colliding elements in a separate data structure within each bucket?",
        answer: "B) Separate Chaining",
        options: [
            "A) Open Addressing",
            "B) Separate Chaining",
            "C) Linear Hashing",
            "D) Double Hashing"
        ]
    },
    {
        numb: 25,
        question: "In Open Addressing, what is the purpose of linear hashing?",
        answer: "B) To explore the following locations with a fixed offset when a collision occurs",
        options: [
            "A) To store colliding elements in a separate data structure",
            "B) To explore the following locations with a fixed offset when a collision occurs",
            "C) To use two hash functions to calculate the step size",
            "D) To resize the hash table when it becomes too full"
        ]
    },
    {
        numb: 26,
        question: "What is the main advantage of Dynamic Hashing over Static Hashing?",
        answer: "B) It avoids wasted space by adjusting the table size dynamically",
        options: [
            "A) The hash table structure remains constant",
            "B) It avoids wasted space by adjusting the table size dynamically",
            "C) It is easier to implement",
            "D) It requires less storage space"
        ]
    },
    {
        numb: 27,
        question: "Which of the following is a disadvantage of Static Hashing?",
        answer: "C) Incorrect initial sizing can lead to a large number of collisions or wasted space",
        options: [
            "A) It is more complex to implement",
            "B) Resizing operations can be costly in terms of performance",
            "C) Incorrect initial sizing can lead to a large number of collisions or wasted space",
            "D) It requires more storage space"
        ]
    },
    {
        numb: 28,
        question: "In Double Hashing, what is the role of the second hash function (h2)?",
        answer: "B) To calculate the step size based on the key",
        options: [
            "A) To calculate the initial location for the key",
            "B) To calculate the step size based on the key",
            "C) To store colliding elements in a separate data structure",
            "D) To resize the hash table when it becomes too full"
        ]
    },
    {
        numb: 29,
        question: "Which of the following is an example of a hash function?",
        answer: "A) DIB2 Hash Function",
        options: [
            "A) DIB2 Hash Function",
            "B) AVL Tree",
            "C) B-Tree",
            "D) Sparse Index"
        ]
    },
    {
        numb: 30,
        question: "What is the primary purpose of a hash table in hashing methods?",
        answer: "B) To associate hash values with the actual data locations",
        options: [
            "A) To store metadata about the file",
            "B) To associate hash values with the actual data locations",
            "C) To store the file's content",
            "D) To store the file's size"
        ]
    },
    {
        numb: 31,
        question: "Which file organization method is most suitable for managing a large number of files with variable sizes?",
        answer: "D) Information Node Allocation",
        options: [
            "A) Contiguous Allocation",
            "B) Linked Allocation",
            "C) Indexed Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 32,
        question: "What is the primary consideration when choosing a file organization method?",
        answer: "C) The application's needs, file sizes, and desired performance",
        options: [
            "A) The size of the file",
            "B) The type of storage medium",
            "C) The application's needs, file sizes, and desired performance",
            "D) The operating system being used"
        ]
    },
    {
        numb: 33,
        question: "Which file organization method is most suitable for managing small files such as configuration files?",
        answer: "D) Information Node Allocation",
        options: [
            "A) Contiguous Allocation",
            "B) Linked Allocation",
            "C) Indexed Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 34,
        question: "Which indexing method is most suitable for managing a large number of files in a hierarchical file system?",
        answer: "D) B-Tree",
        options: [
            "A) Single-Level Index",
            "B) Two-Level Index",
            "C) Multi-Level Index",
            "D) B-Tree"
        ]
    },
    {
        numb: 35,
        question: "Which file organization method is most suitable for managing multimedia files, especially on optical disks?",
        answer: "A) Contiguous Allocation",
        options: [
            "A) Contiguous Allocation",
            "B) Linked Allocation",
            "C) Indexed Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 36,
        question: "Which of the following is a disadvantage of using a B-Tree for file organization?",
        answer: "D) It is more complex to implement",
        options: [
            "A) It is difficult to manage small files",
            "B) It requires more storage space",
            "C) It is not suitable for managing large files",
            "D) It is more complex to implement"
        ]
    },
    {
        numb: 37,
        question: "Which file organization method is most suitable for managing files whose size may evolve over time?",
        answer: "B) Linked Allocation",
        options: [
            "A) Contiguous Allocation",
            "B) Linked Allocation",
            "C) Indexed Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 38,
        question: "Which of the following is a primary index used by the operating system to enable quick searches by name?",
        answer: "A) File name",
        options: [
            "A) File name",
            "B) File size",
            "C) File type",
            "D) File creation date"
        ]
    },
    {
        numb: 39,
        question: "Which of the following is a secondary index that can be used for more targeted searches in multimedia files?",
        answer: "C) Media type (photos, videos, documents)",
        options: [
            "A) File name",
            "B) File size",
            "C) Media type (photos, videos, documents)",
            "D) File creation date"
        ]
    },
    {
        numb: 40,
        question: "Which of the following is a key consideration when choosing an indexing method?",
        answer: "C) The nature of the stored data",
        options: [
            "A) The size of the file",
            "B) The type of storage medium",
            "C) The nature of the stored data",
            "D) The operating system being used"
        ]
    },
    {
        numb: 41,
        question: "In which file allocation method is the File Allocation Table (FAT) used to store pointers to the next block?",
        answer: "C) Indexed-Linked Allocation",
        options: [
            "A) Contiguous Allocation",
            "B) Linked Allocation",
            "C) Indexed-Linked Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 42,
        question: "Which of the following is a disadvantage of Information Node Allocation?",
        answer: "B) It requires more storage space",
        options: [
            "A) It is inefficient for small files",
            "B) It requires more storage space",
            "C) It leads to external fragmentation",
            "D) It is difficult to manage large files"
        ]
    },
    {
        numb: 43,
        question: "In which file allocation method is each file associated with a linked list of data blocks?",
        answer: "B) Linked Allocation",
        options: [
            "A) Contiguous Allocation",
            "B) Linked Allocation",
            "C) Indexed-Linked Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 44,
        question: "Which of the following is a characteristic of a good hash function?",
        answer: "C) It should minimize collisions",
        options: [
            "A) It should produce different hash values for the same input",
            "B) It should generate a hash value of variable length",
            "C) It should minimize collisions",
            "D) It should be computationally inefficient"
        ]
    },
    {
        numb: 45,
        question: "Which of the following is a collision resolution technique in hashing methods?",
        answer: "D) All of the above",
        options: [
            "A) Separate Chaining",
            "B) Linear Hashing",
            "C) Double Hashing",
            "D) All of the above"
        ]
    },
    {
        numb: 46,
        question: "In which file allocation method is each block associated with an entry in the FAT that contains the number of the next block?",
        answer: "C) Indexed-Linked Allocation",
        options: [
            "A) Contiguous Allocation",
            "B) Linked Allocation",
            "C) Indexed-Linked Allocation",
            "D) Information Node Allocation"
        ]
    },
    {
        numb: 47,
        question: "Which of the following is a disadvantage of Linked Allocation?",
        answer: "B) Internal fragmentation",
        options: [
            "A) Direct access to blocks in constant time",
            "B) Internal fragmentation",
            "C) No extension issue",
            "D) Better utilization of storage space"
        ]
    },
    {
        numb: 48,
        question: "Which of the following is a primary index used by the operating system to enable quick searches by name?",
        answer: "A) File name",
        options: [
            "A) File name",
            "B) File size",
            "C) File type",
            "D) File creation date"
        ]
    },
    {
        numb: 49,
        question: "Which of the following is a secondary index that can be used for more targeted searches in multimedia files?",
        answer: "C) Media type (photos, videos, documents)",
        options: [
            "A) File name",
            "B) File size",
            "C) Media type (photos, videos, documents)",
            "D) File creation date"
        ]
    },
    {
        numb: 50,
        question: "Which of the following is a key consideration when choosing an indexing method?",
        answer: "C) The nature of the stored data",
        options: [
            "A) The size of the file",
            "B) The type of storage medium",
            "C) The nature of the stored data",
            "D) The operating system being used"
        ]
    }
];