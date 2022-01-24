function TableEntry(props) {
  return (
    <>
      <div class="round">
        <div class="flex-container">
          <div class="entry-box num">
            <span>{props.serial}</span>
          </div>

          <div class="entry-box entryname">
            <span>{props.name}</span>
          </div>

          <div class="entry-box marks">
            <span>{props.marks}</span>
          </div>

          <div class="entry-box time">
            <span>{props.time}</span>
          </div>

          <div class="entry-box flag">
            <span>{props.end}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableEntry;
