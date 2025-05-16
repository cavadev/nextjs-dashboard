export default function ReferenceLink({ url }) {
  return (
    <p className="mt-1 text-sm text-gray-500 italic break-words">
      Reference: <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">
        {url}
      </a>
    </p>
  );
}