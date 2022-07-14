export function Changelog() {
  return (
    <div>
      <h3 className="mb-4 font-bold">Changelog</h3>
      <ul className="flex list-inside flex-col space-y-2 text-gray-200">
        <li>
          [2022-07-14] -- Add space around grade numbers. Remove side padding
          from desktop view so printing does not squish. Make pink lighter.
          Rotate logo. Remove calendar icon from set on date picker and remove
          width constraint.
        </li>
        <li>
          [2022-06-23] -- Update grade style to make number even bigger. Colour
          and number are the most important information and need to be as big as
          possible for accessability.
        </li>
        <li>[2022-06-21] -- Add separation between orange and red colours</li>
        <li>[2022-06-21] -- Add feedback form</li>
      </ul>
    </div>
  );
}
