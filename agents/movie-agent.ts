export async function movieAgent(userMessage: string) {
  const message = userMessage.toLowerCase();
  if (message.includes("science-fiction")) {
    return {
      text: "Voici quelques films de science-fiction.",
      movies: [
        { id: 1, title: "Interstellar", year: 2014 },
        { id: 2, title: "Arrival", year: 2016 },
        { id: 3, title: "Blade Runner 2049", year: 2017 },
      ],
    };
  }
  return { text: "Je ne connais pas encore ce genre.", movies: [] };
}
