export default function InputField({
  label,
  error,
  ...props
}) {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-black outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-zinc-900 dark:text-white"
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}