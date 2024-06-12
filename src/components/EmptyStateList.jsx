export default function EmptyStateList({ img, heading, subheading }) {
    return (
        <div className="empty-state-list">
            <img src={img} alt="Empty state" />
            <div className="empty-state-list-text">
                <h3>{heading}</h3>
                <p>{subheading}</p>
            </div>
        </div>
    );
}
