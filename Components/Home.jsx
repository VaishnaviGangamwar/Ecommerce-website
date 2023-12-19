import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import Card from './Card'
const Home = ({search,handleClick,data}) =>{
    console.log(search);
    return(
        <div>
            <div className="landpage">
                <br /><br /><br /><br /><br /><br /><br /><br />
        {/* <img src="https://image.spreadshirtmedia.com/content/f_auto,q_80/v2/CMS/Startpage/Hero/christmas2023v2/Xmas23_HP2_desktop_NA/XmasHP2_23_HPteaser_desktop_NA.png" height={'800vh'} width={'95%'} alt="" /> */}
        <h1>Deal is Here</h1>
        {/* <button>Shop More</button> */}
      </div>
      <div className="image">
        <img src="https://images01.nicepagecdn.com/page/47/81/website-template-preview-47818.webp" width={'80%'} height={'500vh'} alt="" />
      </div>
            <Carousel className="carousel">
                {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                    return(
                        <header key={item.id} style={{height:'600px',width:'80%',margin:'auto'}}>
                            <div>
                                <img src={item.image} />
                                <p className="legend">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p style={{fontSize:'18px'}}>${item.price}</p>
                                    <p>{item.rating.rate}⭐</p>
                                    <button onClick={()=>handleClick(item)}>Add Cart</button>
                                </p>
                            </div>
                        </header>
                    )
                })}
            </Carousel>
        

            <section className="sec">
                {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                    return(
                        <Card key={item.id} item={item} handleClick={handleClick}/>
                )
                })}
            </section>

        <div className="footermain">
            <section className="footer">
        <div className="box1">
            <i class="fa-solid fa-phone">CALL</i>
            <i class="fa-solid fa-envelopes-bulk">MAIL</i>
            <i class="fa-brands fa-whatsapp">WHATSAPP</i>
        </div>
        <div className="box2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat labore sunt cum accusamus perspiciatis maiores sed odit! Mollitia, quos, repellendus animi ea accusamus consequatur ducimus officia, vitae aut incidunt eius. Quae nobis beatae culpa facere eius omnis iste in blanditiis unde ea vitae quos sunt magnam perferendis, nemo quasi accusantium dolore. Dignissimos numquam odit consequuntur veniam deserunt distinctio reprehenderit aut facere? Quo reprehenderit expedita rerum provident vero iusto fugiat, atque quaerat similique itaque velit, qui, eaque impedit praesentium doloribus!
            </p>
        </div>
        <div className="box3">
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
    </section>
    </div>

        </div>
    )
}
export default Home


// import { Link } from 'react-router-dom'
// import './Home.css'

// const Content = () => {
//   return (
//     <div>
//         <article className='conart'>
//           <nav className='connav'>
//             <Link to='/' style={{color:'white',textDecoration:'none'}}><div>Home</div></Link>
//             <Link to='/home' style={{color:'white',textDecoration:'none'}}><div>products</div></Link>
//             <Link to='/cart' style={{color:'white',textDecoration:'none'}}><div>Cart</div></Link>
//           </nav>
          
//           <main className='conmain'>
//             <h1 className='grh'>DEAL IS HERE</h1>
//             <Link to='/home' style={{color:'white',textDecoration:'none'}}> <button>Shop More</button></Link>
//           </main>
//         </article>
//         <section className='consec'>
//             <div></div>
//           </section>

//           <section className='imgsec'>
//           <div className='secdiv'>
//           <img src="https://www.bustedtees.com/cdn/shop/files/11_3_1512x.jpg?v=1614699072" style={{height:'200px',width:'200px'}} alt="" />
//           <img src="https://www.bustedtees.com/cdn/shop/files/5_10_1512x.jpg?v=1614698543" style={{height:'200px',width:'200px'}} alt="" />
//           <img src="https://www.bustedtees.com/cdn/shop/files/Sci-Fi_1512x.jpg?v=1625586190" style={{height:'200px',width:'200px'}} alt="" />
//           <img src="https://www.bustedtees.com/cdn/shop/files/BTHats_540x.jpg?v=1616758164" style={{height:'200px',width:'200px'}} alt="" />
//           </div>
//           </section>

//       <section>
//       <footer class="footer">
//   <ul class="social-icons">
//     <h2>contact us</h2>
//     <li><a href="https://wa.me/9763652113" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
//     <li><a href="https://www.instagram.com/harshada.888" target="_blank"><i class="fab fa-instagram"></i></a></li>
//     <li><a href="tel:+9763652113"><i class="fas fa-phone"></i></a></li>
//   </ul>
//   <p class="copyright">© 2023 ShopMore. All rights reserved.</p>
// </footer>

//       </section>
//     </div>
//   )
// }

// export default Content