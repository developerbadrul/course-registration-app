
const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <div className="card bg-base-100 w-80 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-[#2F80ED] font-semibold">Credit Hour Remaining 7 hr</h2>
                    <hr/>
                    <h2 className="text-2xl font-bold">Course Name</h2>
                    <ul>
                        <li>{cart?.title}</li>
                    </ul>
                    <hr />
                    <p>Total Credit Hour : 13</p>
                    <hr />
                    <p>Total Price : 48000 USD</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;