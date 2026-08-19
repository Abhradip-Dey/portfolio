import { SkillItem, ProjectItem, EducationItem, LearningItem, PhilosophyPrinciple } from '../types';

export const PERSONAL_INFO = {
  name: 'Abhradip Dey',
  role: 'BCA Student & Aspiring Software Developer',
  headline: 'Second-Year BCA Student @ Swami Vivekananda University',
  bio: "I'm a second-year BCA student passionate about programming, problem solving, and building useful digital experiences with C, Python, and web technologies.",
  extendedBio: "I am actively building strong computer science fundamentals, focusing on algorithmic problem solving, structured programming, and modern web foundations. I believe in learning by writing code, breaking down problems methodically, and steadily expanding into full-stack software development.",
  university: 'Swami Vivekananda University',
  degree: 'Bachelor of Computer Applications (BCA)',
  currentYear: 'Second Year',
  statusTag: 'Currently learning • Building • Exploring',
  location: 'Kolkata, India',
  email: 'your-email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  stats: [
    { label: 'Academic Standing', value: 'BCA — 2nd Year', sub: 'Swami Vivekananda Univ.' },
    { label: 'Core Technologies', value: '3 Languages', sub: 'C, Python, HTML' },
    { label: 'Learning Cadence', value: 'Daily Code', sub: 'Consistent practice' },
    { label: 'Current Focus', value: 'CS Foundations', sub: 'Algorithms & Web' }
  ]
};

export const CODE_SNIPPETS = {
  c: {
    filename: 'main.c',
    language: 'C',
    code: `#include <stdio.h>

int main() {
    char name[] = "Abhradip Dey";
    char university[] = "Swami Vivekananda University";
    int year = 2;

    printf("========================================\\n");
    printf("Developer: %s\\n", name);
    printf("Program: BCA (Year %d)\\n", year);
    printf("Institution: %s\\n", university);
    printf("Core: Strong C Foundations & Logic\\n");
    printf("========================================\\n");

    return 0;
}`,
    output: `========================================
Developer: Abhradip Dey
Program: BCA (Year 2)
Institution: Swami Vivekananda University
Core: Strong C Foundations & Logic
========================================
[Process completed with exit code 0]`
  },
  python: {
    filename: 'script.py',
    language: 'Python',
    code: `class AspiringDeveloper:
    def __init__(self, name: str, university: str, year: int):
        self.name = name
        self.university = university
        self.year = year
        self.core_stack = ["C", "Python", "HTML"]
        self.learning = ["CSS", "JavaScript", "DSA", "Git"]

    def build_foundation(self):
        print(f"[*] Initializing portfolio for {self.name}")
        print(f"[*] University: {self.university} (Year {self.year})")
        print(f"[*] Core Stack: {', '.join(self.core_stack)}")
        print(f"[*] Currently Exploring: {', '.join(self.learning)}")
        return "Continuous growth through practice & projects!"

developer = AspiringDeveloper("Abhradip Dey", "Swami Vivekananda University", 2)
result = developer.build_foundation()
print(f"[*] Status: {result}")`,
    output: `[*] Initializing portfolio for Abhradip Dey
[*] University: Swami Vivekananda University (Year 2)
[*] Core Stack: C, Python, HTML
[*] Currently Exploring: CSS, JavaScript, DSA, Git
[*] Status: Continuous growth through practice & projects!
[Execution time: 0.042s]`
  },
  html: {
    filename: 'index.html',
    language: 'HTML',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Abhradip Dey - Portfolio</title>
</head>
<body>
  <header>
    <h1>Abhradip Dey</h1>
    <p>BCA Student & Aspiring Software Developer</p>
  </header>
  
  <main>
    <section id="focus">
      <h2>Foundational Focus</h2>
      <ul>
        <li>Structured Programming (C)</li>
        <li>Automation & Scripting (Python)</li>
        <li>Web Structure & Semantics (HTML)</li>
      </ul>
    </section>
  </main>
</body>
</html>`,
    output: `Render Preview:
┌───────────────────────────────────────────┐
│ Abhradip Dey                              │
│ BCA Student & Aspiring Software Developer │
│                                           │
│ Foundational Focus:                       │
│ • Structured Programming (C)              │
│ • Automation & Scripting (Python)         │
│ • Web Structure & Semantics (HTML)        │
└───────────────────────────────────────────┘`
  },
  about: {
    filename: 'developer.json',
    language: 'JSON',
    code: `{
  "name": "Abhradip Dey",
  "education": {
    "degree": "Bachelor of Computer Applications (BCA)",
    "institution": "Swami Vivekananda University",
    "year": "Second Year"
  },
  "skill_levels": {
    "familiar": ["C", "Python", "HTML"],
    "exploring": ["CSS", "JavaScript", "Git & GitHub", "Databases", "DSA"]
  },
  "philosophy": "Learn the fundamentals. Build consistently. Keep improving."
}`,
    output: `JSON valid. Configuration loaded successfully.`
  }
};

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'C Programming',
    category: 'Programming',
    level: 'Familiar',
    iconName: 'Code',
    description: 'Structured programming, pointers, memory allocation, loops, functions, and algorithmic logic building.',
    keyTopics: ['Control Flow', 'Functions & Recursion', 'Pointers & Memory', 'Arrays & Strings', 'File Operations', 'Structures'],
    codeSample: {
      language: 'C',
      filename: 'sample_logic.c',
      code: `// C Pointer and Memory Logic
#include <stdio.h>
#include <stdlib.h>

void process_data(int *arr, int size) {
    for(int i = 0; i < size; i++) {
        *(arr + i) = (i + 1) * 10;
        printf("Index %d -> Value: %d\\n", i, *(arr + i));
    }
}`
    }
  },
  {
    name: 'Python',
    category: 'Programming',
    level: 'Familiar',
    iconName: 'Terminal',
    description: 'Object-oriented programming, scripting, problem solving, data structures (lists, dicts, tuples), and automation.',
    keyTopics: ['Core Syntax & Types', 'Object-Oriented Programming', 'List Comprehensions', 'File I/O Handling', 'String Manipulation', 'Basic Automation'],
    codeSample: {
      language: 'Python',
      filename: 'data_processing.py',
      code: `# Pythonic data manipulation
def analyze_grades(scores: dict[str, int]) -> dict:
    average = sum(scores.values()) / len(scores)
    top_performer = max(scores, key=scores.get)
    return {"average": round(average, 2), "top": top_performer}`
    }
  },
  {
    name: 'HTML5',
    category: 'Web Development',
    level: 'Familiar',
    iconName: 'Globe',
    description: 'Semantic markup, accessibility tags, document hierarchy, forms, audio/video embeds, and web structure basics.',
    keyTopics: ['Semantic Elements', 'Form Controls & Inputs', 'Document Structure', 'Accessibility Attributes', 'Media Tags', 'Linking & Navigation'],
    codeSample: {
      language: 'HTML',
      filename: 'semantic_structure.html',
      code: `<!-- Semantic HTML5 Architecture -->
<article class="developer-card">
  <header>
    <h3>Semantic Web Component</h3>
    <time datetime="2026-08">Active Study</time>
  </header>
  <p>Structured with accessible semantic tags.</p>
</article>`
    }
  },
  {
    name: 'CSS3',
    category: 'Currently Exploring',
    level: 'Exploring',
    iconName: 'Palette',
    description: 'Styling web layouts with Flexbox, CSS Grid, responsive media queries, and clean visual presentation.',
    keyTopics: ['Flexbox & Grid', 'Responsive Media Queries', 'Box Model', 'Transitions & Animations']
  },
  {
    name: 'JavaScript',
    category: 'Currently Exploring',
    level: 'Exploring',
    iconName: 'Cpu',
    description: 'Client-side interactivity, DOM manipulation, ES6+ syntax, asynchronous programming, and event handling.',
    keyTopics: ['DOM Manipulation', 'Event Listeners', 'Async/Await & Fetch', 'ES6 Syntax Basics']
  },
  {
    name: 'Git & GitHub',
    category: 'Currently Exploring',
    level: 'Exploring',
    iconName: 'GitBranch',
    description: 'Version control basics, repository management, branching, commit discipline, and open-source workflows.',
    keyTopics: ['Commit Workflows', 'Branching & Merging', 'Remote Repositories', 'Pull Requests']
  },
  {
    name: 'Databases (SQL)',
    category: 'Currently Exploring',
    level: 'Exploring',
    iconName: 'Database',
    description: 'Relational database concepts, SQL queries (SELECT, INSERT, UPDATE), table relationships, and schema design.',
    keyTopics: ['CRUD Operations', 'Table Relationships', 'Data Integrity', 'Basic Queries']
  },
  {
    name: 'Data Structures',
    category: 'Currently Exploring',
    level: 'Exploring',
    iconName: 'Layers',
    description: 'Foundational computer science data structures including arrays, linked lists, stacks, queues, and complexity basics.',
    keyTopics: ['Arrays & Matrices', 'Linear Search & Binary Search', 'Stacks & Queues', 'Time Complexity (Big-O)']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-01',
    title: 'C Student Record Management System',
    subtitle: 'CLI-based Data Management Utility in C',
    description: 'A structured command-line application in C implementing file persistence, record indexing, search algorithms, and structured data handling for student records.',
    detailedDescription: 'Developed to master pointers, file I/O operations (fopen, fread, fwrite), and modular function architecture in C. Enables adding, updating, searching by ID, sorting by name/marks, and persisting records into binary data files.',
    category: 'Programming & Logic',
    techStack: ['C Language', 'File I/O', 'Structures', 'Pointers', 'CLI'],
    features: [
      'Interactive terminal menu with input validation',
      'Persistent storage using binary and text file handling',
      'Search records by Roll Number, Name, or Academic Status',
      'Memory-efficient dynamic allocation for dynamic arrays'
    ],
    githubUrl: 'https://github.com/yourusername/c-student-management',
    liveDemoUrl: '',
    status: 'Completed',
    accentColor: '#38bdf8',
    codeSnippet: `// Adding record with binary persistence
void add_student(FILE *fp) {
    Student s;
    printf("Enter Roll: ");
    scanf("%d", &s.roll);
    printf("Enter Name: ");
    scanf("%s", s.name);
    fseek(fp, 0, SEEK_END);
    fwrite(&s, sizeof(Student), 1, fp);
    printf("[+] Record saved successfully.\\n");
}`
  },
  {
    id: 'project-02',
    title: 'Python Automation & File Analyzer',
    subtitle: 'Automated Scripting & Text Processing Tool',
    description: 'A modular Python tool designed to automate repetitive directory tasks, parse log files, calculate frequency distributions, and export structured statistical summaries.',
    detailedDescription: 'Built while mastering Python object-oriented patterns, exception handling, and standard library utilities (os, sys, collections). Demonstrates clean code organization and algorithmic problem-solving.',
    category: 'Scripting & Automation',
    techStack: ['Python 3', 'OOP', 'File Processing', 'Data Structures', 'Automation'],
    features: [
      'Automated batch directory traversal and file categorization',
      'Word and token frequency analysis with statistical metrics',
      'Error handling and clean terminal execution logs',
      'Modular class-based architecture for easy extensions'
    ],
    githubUrl: 'https://github.com/yourusername/python-file-analyzer',
    liveDemoUrl: '',
    status: 'Completed',
    accentColor: '#fb923c',
    codeSnippet: `class LogAnalyzer:
    def __init__(self, filepath: str):
        self.filepath = filepath
        self.stats = {}

    def parse_events(self):
        with open(self.filepath, 'r') as f:
            for line in f:
                event = line.strip().split(" - ")[0]
                self.stats[event] = self.stats.get(event, 0) + 1
        return self.stats`
  },
  {
    id: 'project-03',
    title: 'Personal Developer Portfolio & Web Showcase',
    subtitle: 'Responsive Semantic Web Application',
    description: 'A personal developer portfolio built with semantic HTML5 architecture, modern responsive design patterns, dark developer aesthetics, and interactive components.',
    detailedDescription: 'Showcases foundational web technologies, component hierarchy, accessibility best practices, and clean responsive layout design. Serves as the central hub for learning progress, code samples, and academic milestones.',
    category: 'Web Development',
    techStack: ['HTML5', 'Modern UI/UX', 'Responsive Design', 'Interactive State'],
    features: [
      'Accessible semantic structure with clear content hierarchy',
      'Dark developer aesthetic with terminal simulation',
      'Fully responsive across mobile, tablet, and widescreen layouts',
      'Interactive skill filters, project modal views, and contact validation'
    ],
    githubUrl: 'https://github.com/yourusername/developer-portfolio',
    liveDemoUrl: 'https://yourportfolio.dev',
    status: 'In Progress',
    accentColor: '#34d399',
    codeSnippet: `<!-- Semantic Web Portfolio Layout -->
<section id="skills" aria-labelledby="skills-heading">
  <div class="container">
    <h2 id="skills-heading">Technical Foundations</h2>
    <div class="skills-grid">
      <!-- Dynamic technology items -->
    </div>
  </div>
</section>`
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Swami Vivekananda University',
    yearStatus: 'Second Year (Currently Enrolled)',
    period: '2024 - Present',
    location: 'West Bengal, India',
    description: 'Pursuing a comprehensive curriculum in Computer Applications, focusing on computer science fundamentals, structured programming paradigms, algorithm design, and modern web application concepts.',
    focusAreas: [
      'Programming in C & Structured Problem Solving',
      'Python Programming & Object-Oriented Concepts',
      'Web Technologies & Semantic Document Design',
      'Computer Fundamentals & System Architecture',
      'Discrete Mathematics & Computational Logic',
      'Database Management System (DBMS) Concepts'
    ],
    courseworkHighlights: [
      'Building foundational algorithmic problem-solving habits',
      'Understanding memory models and compiled execution in C',
      'Applying Python for scripting and data structure manipulation',
      'Collaborative learning and computer laboratory practice'
    ]
  }
];

export const LEARNING_JOURNEY: LearningItem[] = [
  {
    id: 'learn-1',
    title: 'Web Development',
    category: 'Frontend & Architecture',
    status: 'Active Exploration',
    description: 'Deepening understanding of CSS3 layout engines (Flexbox/Grid), responsive design, and transitioning into modern JavaScript interactivity.',
    topics: ['CSS Grid & Flexbox', 'Responsive UI Patterns', 'Modern JavaScript (ES6+)', 'DOM Manipulation & APIs'],
    iconName: 'Layout'
  },
  {
    id: 'learn-2',
    title: 'Data Structures & Algorithms',
    category: 'Computer Science Core',
    status: 'In Progress',
    description: 'Mastering linear and non-linear data structures in C and Python, focusing on time complexity, sorting algorithms, and logical problem solving.',
    topics: ['Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 'Binary Search & Sorting', 'Big-O Complexity'],
    iconName: 'Binary'
  },
  {
    id: 'learn-3',
    title: 'Python Scripting & OOP',
    category: 'Backend & Automation',
    status: 'Active Exploration',
    description: 'Exploring intermediate Python concepts such as class inheritance, decorators, file parsing, and building small automation utilities.',
    topics: ['OOP Principles', 'File Handling & Regex', 'Modules & Virtual Envs', 'API Consumption Basics'],
    iconName: 'Code2'
  },
  {
    id: 'learn-4',
    title: 'Version Control with Git & GitHub',
    category: 'Developer Workflow',
    status: 'Active Exploration',
    description: 'Learning standard industry developer workflows: branch management, clean commit messages, repository hosting, and open-source exploration.',
    topics: ['Git CLI Commands', 'Branching & Merging', 'GitHub Workflow', 'Markdown Documentation'],
    iconName: 'GitPullRequest'
  },
  {
    id: 'learn-5',
    title: 'Database Fundamentals & SQL',
    category: 'Data Management',
    status: 'Upcoming',
    description: 'Understanding relational database modeling, normalization, table relationships, and writing clean SQL queries.',
    topics: ['Relational Concepts', 'SQL Queries (CRUD)', 'Primary & Foreign Keys', 'Schema Design Basics'],
    iconName: 'Database'
  },
  {
    id: 'learn-6',
    title: 'Problem Solving & Coding Challenges',
    category: 'Algorithmic Thinking',
    status: 'In Progress',
    description: 'Practicing programming logic and pattern generation on coding platforms to sharpen computational intuition.',
    topics: ['Pattern Logic in C', 'Recursion & Iteration', 'Edge Case Handling', 'Dry Run & Debugging'],
    iconName: 'BrainCircuit'
  }
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    id: 1,
    title: 'Learn by building',
    summary: 'Theory becomes solid only when put into code and tested in practical projects.',
    detailedInsight: 'Writing real code and seeing how compilers or interpreters behave teaches insights that reading alone can never provide. Every small script builds confidence.',
    iconName: 'Hammer'
  },
  {
    id: 2,
    title: 'Understand before memorizing',
    summary: 'Focus on the core mechanics, data flow, and underlying logic rather than syntax recall.',
    detailedInsight: 'Syntax can be referenced in seconds; understanding memory layout, pointer arithmetic, and algorithmic trade-offs lasts a lifetime.',
    iconName: 'Search'
  },
  {
    id: 3,
    title: 'Keep experimenting',
    summary: 'Embrace errors and bugs as essential clues in the debugging journey.',
    detailedInsight: 'Segmentation faults in C and TypeErrors in Python are the best teachers. Stepping through with a debugger builds true mental models.',
    iconName: 'FlaskConical'
  },
  {
    id: 4,
    title: 'Write cleaner code',
    summary: 'Prioritize readability, descriptive naming, and structured modularity.',
    detailedInsight: 'Code is read far more often than it is written. Clean formatting, good variable names, and clear comments reflect clarity of thought.',
    iconName: 'Sparkles'
  },
  {
    id: 5,
    title: 'Improve one step at a time',
    summary: 'Consistent daily effort compounds into mastery and deep engineering competence.',
    detailedInsight: 'Small, steady daily commits and solving one problem at a time create sustainable momentum over months and years.',
    iconName: 'TrendingUp'
  }
];
