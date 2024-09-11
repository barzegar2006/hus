const CartBlog = ({itemsBlog}) => {
    return (
        <div>
            <div className='blogItems'>
                <div className='blogItemsCard'>
                    <img src={itemsBlog.img} alt="" className='blogItemsImg' />
                    <div className='textCardBlog'>
                        <div className='date date-blog'>
                            <p className='fw-bold fs-4'>15</p>
                            <p>Jan</p>
                        </div>
                        <div className='descriptionBlog'>
                            <p className='titleItems'>{itemsBlog.title}</p>
                            <p className='desc-blog'>{itemsBlog.description}</p>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartBlog
