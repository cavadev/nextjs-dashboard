import Link from 'next/link';
import ReferenceLink from './ReferenceLink';

export default function DevTests() {
  return (
    <div className="max-w-4xl mx-auto pt-16 pb-8 px-8 bg-white rounded-3xl shadow-2xl mt-12 ">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
        Developer Tests
      </h1>
      <ul className="space-y-6">
        <li>
          <div className="flex items-center justify-between">
            <Link
              href="/dev-tests/testdome1"
              className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
            >
              Mega Store App 
            </Link>
          </div>
          <ReferenceLink
            url="https://www.testdome.com/questions/react-js/mega-store-app/129895"
          />
        </li>
        <li>
          <Link
            href="/dev-tests/testdome2"
            className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
          >
            Toggle Message
          </Link>
          <ReferenceLink
            url="https://www.testdome.com/questions/react-js/toggle-message/107225"
          />
        </li>
      </ul>
    </div>
  );
}
