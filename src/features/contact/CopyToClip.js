export function copyToClip(tableRef) {
  let range = document.createRange();
  range.selectNodeContents(tableRef.current);

  console.log(range);
  let selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('Copy');
  selection.removeAllRanges();
}
