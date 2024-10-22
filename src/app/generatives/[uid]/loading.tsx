export default function Loading() {
  return (
    <div className="mx-auto mb-20 mt-10 flex max-w-7xl flex-col gap-8 px-4">
      <div className="fallback h-20 sm:h-10" />

      <div>
        <div className="mb-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="fallback h-[30rem]" />
          <div className="fallback hidden h-[30rem] md:block" />
          <div className="fallback hidden h-[30rem] lg:block" />
        </div>

        <div className="flex items-center justify-center gap-5">
          <div className="fallback size-10 !rounded-full" />

          <div className="flex gap-2">
            <div className="fallback size-5 !rounded-full" />
            <div className="fallback size-5 !rounded-full" />
            <div className="fallback size-5 !rounded-full" />
            <div className="fallback size-5 !rounded-full" />
            <div className="fallback size-5 !rounded-full" />
          </div>

          <div className="fallback size-10 !rounded-full" />
        </div>
      </div>
    </div>
  );
}
