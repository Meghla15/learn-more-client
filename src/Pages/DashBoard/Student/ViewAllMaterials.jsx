import { useLoaderData } from "react-router-dom";

const ViewAllMaterials = () => {
  const studySections = useLoaderData();
  //   console.log(studySections);
  return (
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-500  to-purple-500 text-transparent bg-clip-text animate-gradient font-lato mb-6">
        All Study Materials : {studySections.length}
      </h1>
      <ul className="divide-y divide-gray-100">
        {studySections.map((studySection) => (
          <li
            key={studySection.sessionTitle}
            className="flex justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                alt=""
                src={studySection.tutorImg}
                className="size-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {studySection.sessionTitle}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  {studySection.tutorName}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">{studySection.status}</p>
              <p className="text-xs/5 text-gray-500">
                {studySection.registrationFee}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAllMaterials;
