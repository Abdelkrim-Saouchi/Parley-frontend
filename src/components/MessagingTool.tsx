const MessagingTool = () => {
  return (
    <div className="mt-4 flex items-center gap-4">
      <div className="flex grow items-center gap-2 rounded-full border-2 border-secondary p-2 md:gap-4">
        <button>
          <span className="icon-[iconoir--emoji] size-7 md:size-12"></span>
        </button>
        <input
          type="text"
          placeholder="Message"
          className="w-full grow bg-transparent outline-none"
        />
      </div>
      <button>
        <span className="icon-[bx--image-add] size-7 md:size-12"></span>
      </button>
      <button>
        <span className="icon-[majesticons--send] size-7 text-accent md:size-12"></span>
      </button>
    </div>
  );
};

export default MessagingTool;
