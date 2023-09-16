/* eslint-disable react/prop-types */

const Cart = (props) => {
    console.log('working select item', props.cart);
    // const { title, course_duration_hours, price } = cart;
    // let totalPrice = props.cart.price;
    return (
        <div>
            <div className="card bg-base-100 w-80 mx-auto shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-[#2F80ED] font-semibold">Credit Hour Remaining 7 hr</h2>
                    <hr />
                    <h2 className="text-2xl font-bold">Course Name</h2>
                    <ul className="list-disc">
                        {
                            props?.cart?.map((selectItem) => <li key={selectItem.id}>{selectItem.title}</li>)
                            
                        }
                    </ul>
                    <hr />
                    <p>Total Credit Hour : {props.credit}</p>
                    <hr />
                    <p>Total Price : {props.price} USD</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;