const WidgetCart = ({show, action}) => {
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <p className="title mb-6">Widget Cart</p>
            <button className="button is-danger" onClick={action}>Cerrar widget</button>
        </div>
    )
}
export default WidgetCart
