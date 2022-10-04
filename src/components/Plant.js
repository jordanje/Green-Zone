export default function Plant({plant}) {

    const { name, image, care_level, size } = plant

    return (
        <div>
            <h3>{name}</h3>
            <img src={image} />
            <p>Care Level: {care_level}</p>
            <p>Size: {size}</p>
            <button>Add</button>
        </div>
    )
}