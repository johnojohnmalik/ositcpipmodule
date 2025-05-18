const questions = [
  {
    type: "mc",
    question: "Which layer of the OSI model is responsible for routing packets between devices?",
    options: ["Data Link", "Network", "Transport", "Application"],
    answer: 1
  },
  {
    type: "mc",
    question: "Which protocol uses port 80?",
    options: ["FTP", "HTTP", "SMTP", "DNS"],
    answer: 1
  },
  {
    type: "tf",
    question: "The Presentation layer is responsible for data encryption and decryption.",
    answer: true
  },
  {
    type: "oe",
    question: "Name the 7 layers of the OSI model in order from top to bottom.",
    answer: "Application, Presentation, Session, Transport, Network, Data Link, Physical"
  },
  
  
  {
    "type": "mc",
    "question": "Which layer is responsible for converting data into electrical signals?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": 0,
    "explanation": "The Physical layer (Layer 1) is responsible for the transmission and reception of unstructured raw data between a device and a physical transmission medium, including converting data into electrical, radio, or optical signals."
  },
  {
    "type": "tf",
    "question": "The Application layer provides network services directly to user applications.",
    "answer": true,
    "explanation": "The Application layer (Layer 7) is the closest to the end user and provides network services directly to applications. It serves as the user interface responsible for displaying received information to the user."
  },
  {
    "type": "mc",
    "question": "Which layer is responsible for logical addressing (IP addresses)?",
    "options": ["Data Link", "Network", "Transport", "Session"],
    "answer": 1,
    "explanation": "The Network layer (Layer 3) handles logical addressing, particularly IP addressing, and is responsible for packet forwarding/routing through intermediate routers."
  },
  {
    "type": "mc",
    "question": "How many layers are in the TCP/IP model?",
    "options": ["3", "4", "5", "7"],
    "answer": 1,
    "explanation": "The TCP/IP model consists of 4 layers: Application, Transport, Internet, and Network Access (Link) layers."
  },
  {
    "type": "oe",
    "question": "List the 4 layers of the TCP/IP model.",
    "answer": "Application, Transport, Internet, Network Access (or Link)",
    "explanation": "The TCP/IP model has 4 layers: Application (top), Transport, Internet, and Network Access/Link (bottom)."
  },
  {
    "type": "mc",
    "question": "Which TCP/IP layer corresponds to the OSI Network layer?",
    "options": ["Application", "Transport", "Internet", "Link"],
    "answer": 2,
    "explanation": "The Internet layer in the TCP/IP model corresponds to the Network layer (Layer 3) in the OSI model. Both are responsible for routing and logical addressing."
  },
  {
    "type": "tf",
    "question": "The TCP/IP Application layer combines the OSI Application, Presentation, and Session layers.",
    "answer": true,
    "explanation": "The TCP/IP Application layer combines the functionality of the OSI model's top three layers: Application, Presentation, and Session layers."
  },
  {
    "type": "mc",
    "question": "Which layer in the TCP/IP model is responsible for end-to-end communication?",
    "options": ["Application", "Transport", "Internet", "Link"],
    "answer": 1,
    "explanation": "The Transport layer in the TCP/IP model is responsible for end-to-end communication, reliability, flow control, and error correction between hosts."
  },
  {
    "type": "mc",
    "question": "Which protocol uses port 80?",
    "options": ["FTP", "HTTP", "SMTP", "DNS"],
    "answer": 1,
    "explanation": "HTTP (Hypertext Transfer Protocol) uses port 80 for standard web browsing traffic."
  },
  {
    "type": "mc",
    "question": "Which protocol is used for secure web browsing?",
    "options": ["HTTP", "FTP", "HTTPS", "Telnet"],
    "answer": 2,
    "explanation": "HTTPS (Hypertext Transfer Protocol Secure) is used for secure web browsing, encrypting the communication between the client and server using SSL/TLS."
  },
  {
    "type": "mc",
    "question": "What port does DNS use?",
    "options": ["21", "23", "53", "110"],
    "answer": 2,
    "explanation": "DNS (Domain Name System) uses port 53 for translating domain names to IP addresses."
  },
  {
    "type": "mc",
    "question": "Which protocol is used to send emails?",
    "options": ["POP3", "SMTP", "IMAP", "HTTP"],
    "answer": 1,
    "explanation": "SMTP (Simple Mail Transfer Protocol) is used for sending emails between servers."
  },
  {
    "type": "mc",
    "question": "Which protocol is used to retrieve emails from a server?",
    "options": ["SMTP", "POP3", "FTP", "SSH"],
    "answer": 1,
    "explanation": "POP3 (Post Office Protocol version 3) is used to retrieve emails from a mail server to a client application."
  },
  {
    "type": "mc",
    "question": "What port does FTP use for control commands?",
    "options": ["20", "21", "22", "23"],
    "answer": 1,
    "explanation": "FTP (File Transfer Protocol) uses port 21 for control commands and port 20 for data transfer."
  },
  {
    "type": "mc",
    "question": "Which protocol is used for network device management?",
    "options": ["SNMP", "SMTP", "HTTP", "FTP"],
    "answer": 0,
    "explanation": "SNMP (Simple Network Management Protocol) is used for collecting and organizing information about managed devices on IP networks."
  },
  {
    "type": "mc",
    "question": "What is the data unit at the Transport layer?",
    "options": ["Frame", "Packet", "Segment", "Bit"],
    "answer": 2,
    "explanation": "At the Transport layer (Layer 4), data is organized into segments."
  },
  {
    "type": "mc",
    "question": "What is the data unit at the Network layer?",
    "options": ["Frame", "Packet", "Segment", "Bit"],
    "answer": 1,
    "explanation": "At the Network layer (Layer 3), data is organized into packets."
  },
  {
    "type": "mc",
    "question": "What is the data unit at the Data Link layer?",
    "options": ["Frame", "Packet", "Segment", "Bit"],
    "answer": 0,
    "explanation": "At the Data Link layer (Layer 2), data is organized into frames."
  },
  {
    "type": "mc",
    "question": "What is the data unit at the Physical layer?",
    "options": ["Frame", "Packet", "Segment", "Bit"],
    "answer": 3,
    "explanation": "At the Physical layer (Layer 1), data is transmitted as bits."
  },
  {
    "type": "mc",
    "question": "What is the data unit at the Application layer?",
    "options": ["Data", "Segment", "Packet", "Frame"],
    "answer": 0,
    "explanation": "At the Application layer (Layer 7), information is handled as data."
  },
  {
    "type": "mc",
    "question": "Which layer would a network switch primarily operate at?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": 1,
    "explanation": "A network switch primarily operates at the Data Link layer (Layer 2), using MAC addresses to forward frames."
  },
  {
    "type": "mc",
    "question": "Which layer would a router primarily operate at?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": 2,
    "explanation": "A router primarily operates at the Network layer (Layer 3), using IP addresses to route packets between different networks."
  },
  {
    "type": "mc",
    "question": "Which layer would a hub operate at?",
    "options": ["Physical", "Data Link", "Network", "Application"],
    "answer": 0,
    "explanation": "A hub operates at the Physical layer (Layer 1), simply regenerating and retransmitting electrical signals to all ports."
  },
  {
    "type": "mc",
    "question": "Which layer is responsible for MAC addressing?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": 1,
    "explanation": "The Data Link layer (Layer 2) is responsible for MAC (Media Access Control) addressing, which provides physical addressing for network devices."
  },
  {
    "type": "mc",
    "question": "Which layer is responsible for IP addressing?",
    "options": ["Physical", "Data Link", "Network", "Transport"],
    "answer": 2,
    "explanation": "The Network layer (Layer 3) is responsible for IP addressing, which provides logical addressing for routing packets between networks."
  },
  {
    "type": "tf",
    "question": "A firewall typically operates at the Network and Transport layers.",
    "answer": true,
    "explanation": "Firewalls typically operate at the Network layer (Layer 3) and Transport layer (Layer 4), filtering traffic based on IP addresses, ports, and protocols."
  },
  {
    "type": "oe",
    "question": "Give an example of a protocol used at the Presentation layer.",
    "answer": "SSL, TLS, JPEG, MPEG",
    "explanation": "The Presentation layer (Layer 6) includes protocols for data translation, encryption and compression such as SSL, TLS, JPEG, and MPEG."
  },
  {
    "type": "oe",
    "question": "What is the main responsibility of the Transport layer?",
    "answer": "Reliable data transfer, flow control, error correction, segmentation.",
    "explanation": "The Transport layer (Layer 4) is responsible for reliable end-to-end communication including segmentation, flow control, error correction, and reassembly of data."
  },
  {
    "type": "oe",
    "question": "What is the main responsibility of the Network layer?",
    "answer": "Routing, logical addressing, forwarding packets.",
    "explanation": "The Network layer (Layer 3) handles logical addressing (IP addresses), routing packets between networks, and determining the best path for data to travel."
  },
  {
    "type": "oe",
    "question": "What is the main responsibility of the Data Link layer?",
    "answer": "Framing, physical addressing, error detection/correction.",
    "explanation": "The Data Link layer (Layer 2) is responsible for framing, physical addressing (MAC addresses), and error detection/correction at the link level."
  },
  // ... Add more questions here (see previous message for ideas)
  ,
  // --- New Questions Start Here ---
  {
    type: "mc",
    question: "Which OSI layer is responsible for end-to-end communication and error recovery?",
    options: ["Session", "Transport", "Network", "Data Link"],
    answer: 1,
    explanation: "The Transport layer (Layer 4) is responsible for end-to-end communication, error recovery, and flow control."
  },
  {
    type: "mc",
    question: "Which protocol operates at the Transport layer of the OSI model?",
    options: ["IP", "TCP", "Ethernet", "HTTP"],
    answer: 1,
    explanation: "TCP (Transmission Control Protocol) operates at the Transport layer (Layer 4)."
  },
  {
    type: "mc",
    question: "Which OSI layer is responsible for establishing, managing, and terminating sessions?",
    options: ["Presentation", "Session", "Transport", "Network"],
    answer: 1,
    explanation: "The Session layer (Layer 5) manages sessions between applications."
  },
  {
    type: "mc",
    question: "Which protocol is commonly used at the Application layer for secure web browsing?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    answer: 1,
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) is used for secure web browsing."
  },
  {
    type: "mc",
    question: "Which layer of the OSI model is responsible for data encryption and compression?",
    options: ["Session", "Presentation", "Transport", "Network"],
    answer: 1,
    explanation: "The Presentation layer (Layer 6) handles data encryption, decryption, and compression."
  },
  {
    type: "mc",
    question: "Which protocol is used for remote login and operates at the Application layer?",
    options: ["Telnet", "IP", "TCP", "Ethernet"],
    answer: 0,
    explanation: "Telnet is an Application layer protocol used for remote login."
  },
  {
    type: "mc",
    question: "Which port does HTTPS use by default?",
    options: ["80", "21", "443", "25"],
    answer: 2,
    explanation: "HTTPS uses port 443 by default."
  },
  {
    type: "mc",
    question: "Which layer of the TCP/IP model is responsible for routing packets?",
    options: ["Application", "Transport", "Internet", "Network Access"],
    answer: 2,
    explanation: "The Internet layer in the TCP/IP model is responsible for routing packets."
  },
  {
    type: "mc",
    question: "Which protocol is used for file transfers and operates at the Application layer?",
    options: ["FTP", "IP", "TCP", "UDP"],
    answer: 0,
    explanation: "FTP (File Transfer Protocol) is an Application layer protocol for file transfers."
  },
  {
    type: "mc",
    question: "Which OSI layer is responsible for physical addressing?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: 1,
    explanation: "The Data Link layer (Layer 2) is responsible for physical (MAC) addressing."
  },
  {
    type: "mc",
    question: "Which protocol is used for sending emails?",
    options: ["SMTP", "POP3", "IMAP", "HTTP"],
    answer: 0,
    explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending emails."
  },
  {
    type: "mc",
    question: "Which protocol is used to retrieve emails from a server?",
    options: ["SMTP", "POP3", "FTP", "SSH"],
    answer: 1,
    explanation: "POP3 (Post Office Protocol version 3) is used to retrieve emails from a mail server."
  },
  {
    type: "mc",
    question: "Which layer of the OSI model is responsible for converting data into bits for transmission?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: 0,
    explanation: "The Physical layer (Layer 1) converts data into bits for transmission."
  },
  {
    type: "mc",
    question: "Which protocol is used for secure remote administration?",
    options: ["Telnet", "SSH", "FTP", "SMTP"],
    answer: 1,
    explanation: "SSH (Secure Shell) is used for secure remote administration."
  },
  {
    type: "mc",
    question: "Which port does SSH use by default?",
    options: ["22", "23", "25", "53"],
    answer: 0,
    explanation: "SSH uses port 22 by default."
  },
  {
    type: "mc",
    question: "Which protocol is used for domain name resolution?",
    options: ["DNS", "DHCP", "SMTP", "SNMP"],
    answer: 0,
    explanation: "DNS (Domain Name System) is used for domain name resolution."
  },
  {
    type: "mc",
    question: "Which port does Telnet use by default?",
    options: ["21", "22", "23", "25"],
    answer: 2,
    explanation: "Telnet uses port 23 by default."
  },
  {
    type: "mc",
    question: "Which protocol is used for network management?",
    options: ["SNMP", "SMTP", "FTP", "HTTP"],
    answer: 0,
    explanation: "SNMP (Simple Network Management Protocol) is used for network management."
  },
  {
    type: "mc",
    question: "Which protocol is used for dynamic IP address assignment?",
    options: ["DNS", "DHCP", "SMTP", "SNMP"],
    answer: 1,
    explanation: "DHCP (Dynamic Host Configuration Protocol) is used for dynamic IP address assignment."
  },
  {
    type: "mc",
    question: "Which port does DNS use by default?",
    options: ["21", "53", "80", "110"],
    answer: 1,
    explanation: "DNS uses port 53 by default."
  },
  {
    type: "tf",
    question: "The Data Link layer is responsible for error detection and correction.",
    answer: true,
    explanation: "The Data Link layer (Layer 2) handles error detection and correction."
  },
  {
    type: "tf",
    question: "The Internet layer in the TCP/IP model is responsible for physical transmission of data.",
    answer: false,
    explanation: "The Network Access (Link) layer is responsible for physical transmission. The Internet layer handles routing."
  },
  {
    type: "tf",
    question: "The Application layer in the OSI model is responsible for presenting data in a readable format.",
    answer: false,
    explanation: "The Presentation layer (Layer 6) is responsible for presenting data."
  },
  {
    type: "tf",
    question: "TCP is a connection-oriented protocol.",
    answer: true,
    explanation: "TCP (Transmission Control Protocol) is connection-oriented."
  },
  {
    type: "tf",
    question: "UDP guarantees delivery of data packets.",
    answer: false,
    explanation: "UDP (User Datagram Protocol) does not guarantee delivery."
  },
  {
    type: "tf",
    question: "The Physical layer is responsible for logical addressing.",
    answer: false,
    explanation: "Logical addressing is handled by the Network layer (Layer 3)."
  },
  {
    type: "tf",
    question: "Routers operate at the Network layer of the OSI model.",
    answer: true,
    explanation: "Routers operate at the Network layer (Layer 3)."
  },
  {
    type: "tf",
    question: "Switches operate at the Transport layer of the OSI model.",
    answer: false,
    explanation: "Switches operate at the Data Link layer (Layer 2)."
  },
  {
    type: "tf",
    question: "The Session layer is responsible for dialog control between devices.",
    answer: true,
    explanation: "The Session layer (Layer 5) manages dialog control."
  },
  {
    type: "tf",
    question: "The Network Access layer in the TCP/IP model corresponds to the Data Link and Physical layers in the OSI model.",
    answer: true,
    explanation: "The Network Access (Link) layer covers both Data Link and Physical layers."
  },
  {
    type: "oe",
    question: "List the 7 layers of the OSI model from bottom to top.",
    answer: "Physical, Data Link, Network, Transport, Session, Presentation, Application",
    explanation: "OSI model from bottom: Physical, Data Link, Network, Transport, Session, Presentation, Application."
  },
  {
    type: "oe",
    question: "What is the main function of the Presentation layer?",
    answer: "Data translation, encryption, compression",
    explanation: "The Presentation layer translates, encrypts, and compresses data."
  },
  {
    type: "oe",
    question: "Name two protocols that operate at the Transport layer.",
    answer: "TCP, UDP",
    explanation: "TCP and UDP are both Transport layer protocols."
  },
  {
    type: "oe",
    question: "What is the data unit used at the Data Link layer?",
    answer: "Frame",
    explanation: "The Data Link layer uses frames as its data unit."
  },
  {
    type: "oe",
    question: "Which OSI layer is responsible for flow control and segmentation?",
    answer: "Transport layer",
    explanation: "The Transport layer handles flow control and segmentation."
  },
  {
    type: "oe",
    question: "Give a real-world example of a device that operates at the Physical layer.",
    answer: "Hub, cable, repeater",
    explanation: "Hubs, cables, and repeaters operate at the Physical layer."
  },
  {
    type: "oe",
    question: "Which layer of the TCP/IP model is responsible for logical addressing?",
    answer: "Internet layer",
    explanation: "The Internet layer handles logical addressing (IP addresses)."
  },
  {
    type: "oe",
    question: "What is the main function of the Network layer?",
    answer: "Routing, logical addressing, forwarding packets",
    explanation: "The Network layer routes packets and handles logical addressing."
  },
  {
    type: "oe",
    question: "Which protocol is used for secure web browsing?",
    answer: "HTTPS",
    explanation: "HTTPS is used for secure web browsing."
  },
  {
    type: "oe",
    question: "What port does SMTP use by default?",
    answer: "25",
    explanation: "SMTP uses port 25 by default."
  }
  // --- New Questions End Here ---
];
