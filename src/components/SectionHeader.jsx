export default function SectionHeader({ num, title, emphasis }) {
  return (
    <div className="section-header reveal">
      <span className="section-num">§ {num}</span>
      <h2 className="section-title">
        {title} <em>{emphasis}</em>
      </h2>
      <div className="section-rule"></div>
    </div>
  )
}
