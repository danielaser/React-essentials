import "./CoreConcept.css";
//this is the shorter way to do it. It can be with a parameter call props and after call the object´s elements like {props.title}
export default function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
