
const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <div className="text1">{title}</div>
            <br />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <br />
            <img src={imagen} />
            <hr />
        </div>
    );
}

export default NovedadItem;
