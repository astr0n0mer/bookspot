export default function BookCard({
  book: { title, authors, cover, summary },
  ...props
}) {
  return (
    <figure
      className="group grid cursor-pointer grid-cols-2 items-start gap-4 rounded-lg p-4 shadow-md transition hover:shadow-xl"
      {...props}
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={cover}
          alt={title}
          className="w-full transition-transform group-hover:scale-105"
        />
      </div>

      <figcaption>
        <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">
          {title}
        </h3>

        <div className="my-1 text-sm">{authors.join(", ")}</div>

        <p className="mt-4 text-sm md:text-base">{summary}</p>
      </figcaption>
    </figure>
  );
}
