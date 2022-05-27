type LiveButton = {
    link: string
}

function LiveButton(props: LiveButton) {
  return (
    <a
      className="btn btn-live my-4 sm:my-0"
      target="_blank"
      href={props.link}
    >
      <span className="flex">
        <i className="fas fa-circle fa-xs absolute inline-flex animate-ping opacity-80 mt-3"></i>
        <i className="fas fa-circle fa-xs relative inline-flex pt-3"></i>
        <span className="inline-flex pl-2">Live Site</span>
      </span>
    </a>
  );
}

export default LiveButton;
