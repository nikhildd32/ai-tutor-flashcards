export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface Flashcard {
  term: string;
  definition: string;
}

export interface FlashcardSet {
  _id?: string;
  title: string;
  description: string;
  cards: Flashcard[];
  createdAt: Date;
}
