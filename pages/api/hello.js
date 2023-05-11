export const config = {
  runtime: 'edge',
};

export default function handler(request, response) {
  response.status(200).json({ text: 'Hello' });
}
