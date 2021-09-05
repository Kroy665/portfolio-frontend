import React,{useRef} from 'react'

function Tests() {
    const refObj = useRef(null)
    const btnClick=() => window.scrollTo({ top: refObj.current.offsetY, behavior: 'smooth'})
    const pstyle={color: 'white', fontSize: '30px'}
    return (
        <div>
            <button onClick={btnClick}>Ref To Title</button>

            <p style={pstyle}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni in repellendus ratione, esse autem enim dolorem veritatis iusto blanditiis maxime soluta quam eos illum accusamus aliquid officia? Excepturi autem velit, aspernatur est, ex soluta sunt optio sapiente voluptate provident deserunt perferendis quia aperiam blanditiis eveniet ab corporis iusto veritatis sit at totam, esse placeat? Dicta cumque inventore animi velit magni ipsa tempora laboriosam mollitia, ipsam ullam distinctio porro, optio deleniti, laudantium aliquid! Facere suscipit enim sequi maiores minus consequuntur iusto vel sit recusandae, consequatur ad odit expedita eum, similique quam mollitia laboriosam architecto culpa iste! Sapiente placeat labore excepturi voluptate.
            </p>
            <p style={pstyle}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam corrupti non sequi temporibus placeat pariatur mollitia vero eaque est. Repellendus incidunt quibusdam numquam! Non, veniam. Voluptatum quis repellendus non nulla ducimus, quae ullam corporis perferendis cupiditate error illo illum cum alias veritatis dolorum necessitatibus nam tempora fugiat consequatur blanditiis optio odit! Necessitatibus ipsum adipisci dolorem, odit reprehenderit, officia, reiciendis corrupti similique minus soluta laudantium tempore. Magni doloribus exercitationem suscipit, commodi illo rem nobis perferendis voluptatibus numquam quia praesentium. Iure ut sed rem facere, quasi inventore harum tempore consequuntur sint quisquam qui voluptas quis quo illum minima repellendus itaque impedit aperiam perferendis incidunt magni beatae aliquid! Repellendus ad omnis, ducimus expedita rerum aspernatur voluptatibus cumque, id obcaecati ea cum numquam dignissimos.
            </p>
            <h1 ref={refObj}>Title</h1>
            <p style={pstyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus animi vitae dolores nobis neque corporis tempore incidunt fuga nesciunt velit. Incidunt illum asperiores, voluptatum veniam aliquam impedit, ipsa quo necessitatibus laboriosam repellat fuga assumenda tempore velit error sit officia. Ex aliquam cupiditate dicta sed modi minus fuga est praesentium consectetur recusandae harum perferendis quidem quasi distinctio aperiam, iusto animi alias in quia adipisci reiciendis beatae debitis maxime. Vitae pariatur similique perferendis nobis libero harum, illo, quasi velit sit est repellendus voluptatibus quia eos commodi laboriosam in blanditiis asperiores aliquam, esse accusamus voluptatem dolore ab distinctio! Eligendi illo similique consectetur facilis, a est quasi quibusdam perspiciatis. Et quisquam reprehenderit earum magnam provident! Recusandae earum eaque numquam nemo! Quae temporibus voluptates ut illo iste accusamus distinctio nam enim similique adipisci veritatis inventore eaque autem, libero accusantium rerum molestiae illum quam cum harum doloremque provident neque. Odio cum sed accusantium quibusdam ad modi.</p>

        </div>
    )
}

export default Tests
