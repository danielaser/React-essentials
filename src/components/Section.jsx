export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
//...props: all extra props are gonna be here like ids etc, id="" or className when Section function is called on the Examples.jsx component
