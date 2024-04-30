import React, { useState } from 'react'

export default function Projectdetail2() {

    const [nextpage, setnextpage] = useState(0)


    return (
        <>
            <div className=' w-full bg-black grid xl:grid-cols-4 lg:grid-cols-2 gap-4 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 xl:px-28 px-3 md:px-8 sm:px-6'>
                <div className='  flex justify-center flex-col col-span-3 py-10  gap-6'>
                    <img src="../asets/img/Jonesdao_s8zsq2.webp" alt="" />
                    <h2 className=' text-white text-3xl font-bold'>Client & Business Challenge</h2>
                    <p className=' text-white text-lg'>Our client, a visionary in the decentralized finance (DeFi) sector, presented Creasoft a substantial challenge and a transformative vision. Seeking to revolutionize the DeFi landscape, the client aimed to leverage the expertise of Jones DAO to create a groundbreaking project. The challenge was multifaceted, requiring Creasoft to not only understand the intricacies of DeFi but also to design and implement innovative solutions that would set new benchmarks in the industry. In navigating this challenge, we needed to balance the complexities of DeFi while ensuring user-friendly interfaces and optimal security. The client's aspiration was not merely a project but a paradigm shift in how users engage with decentralized finance.</p>
                    <h2 className=' text-white text-3xl font-bold'>Project Description</h2>
                    <p className=' text-white text-lg'>The project unfolded as a comprehensive initiative to establish the Jones DAO NFT Marketplace as a trailblazer in the DeFi ecosystem. Our objective was to design, develop, and implement a marketplace that seamlessly integrates advanced DeFi strategies, yield-bearing tokens, and transparent liquidity protocols. This involved creating a user-centric interface that simplifies the complexities of DeFi, making it accessible to a broad audience. Our project encompassed the development of diverse vaults, innovative token structures, and automated strategies, elevating the user experience to new heights within the decentralized financial landscape. The Jones DAO NFT Marketplace project is not just a platform; it is a strategic and visionary approach to redefine the possibilities within decentralized finance.</p>
                    <div className=' h-96  grid grid-cols-4 gap-5'>
                        <div className='  col-span-3'>
                            {
                                nextpage === 0 && (
                                    <>
                                        <img src="../asets/img/Group_1261156275_gjtj6s.webp" alt="hgugugu" />
                                        <button onClick={() => setnextpage(1)} className=' bg-gray-400 h-12 w-36'>Next</button>
                                    </>
                                )
                            }
                            {
                                nextpage === 1 && (
                                    <>
                                        <img src="../asets/img/Group_1261156276_h9hraf.webp" alt="hgugugu" />
                                        <button onClick={() => setnextpage(2)} className=' bg-gray-400 h-12 w-36'>Next</button>
                                    </>
                                )
                            }
                             {
                                nextpage === 2 && (
                                    <>
                                        <img src="../asets/img/Group_1261156277_uwyaxh.webp" alt="hgugugu" />
                                        <button onClick={() => setnextpage(3)} className=' bg-gray-400 h-12 w-36'>Next</button>
                                    </>
                                )
                            }
                        </div>
                     



                       
                    </div>
                    <h2 className=' text-white text-4xl font-bold'>Key Features</h2>
                    <h2 className=' text-white text-3xl font-bold'>Jones Vaults:</h2>
                    <p  className=' text-white text-lg'>Introducing a diverse range of vaults, including OpFi Vaults, Metavaults, and Advanced Strategy Vaults. These vaults enabled users to seamlessly engage with institutional-grade strategies, enhancing liquidity and optimizing capital efficiency within the DeFi space.</p>
                    <h2 className=' text-white text-3xl font-bold'>JAssets</h2>
                    <p className=' text-white text-lg'>The introduction of jAssets, fully composable, yield-bearing tokens, unlocked liquidity, and capital efficiency across DeFi. Users could participate in liquidity pools, swap tokens, and benefit from the yield generated within the Jones DAO ecosystem.</p>
                    <h2 className=' text-white text-3xl font-bold'>JGLP & JUSDC Vaults:</h2>
                    <p className=' text-white text-lg'>Offering transparent and consistent leveraged yield, these vaults worked in tandem to amplify returns for users. The architecture used in these vaults surpassed competing designs, providing optimal approaches to yield generation in both risk-on and risk-off markets.</p>
                    <h2 className=' text-white text-3xl font-bold'>Metavaults</h2>
                    <p className=' text-white text-lg'>Leveraging automated strategies to hedge downside risk or amplify upside potential for liquidity providers. These Metavaults provided users with advanced options to manage their positions, adapting to market conditions through features like the Flip function.</p>

                </div>
                <div className='  flex justify-center items-center flex-col py-16 '>
                    {/* <img src="../asets/img/about-baner-1_cvxzp8.webp" alt="" /> */}
                    {/* <img src="../asets/img/about-baner-2_mqowwr.webp" alt="" className=' absolute xl:right-3 lg:right-0 md:right-16 sm:right-1 right-0 bottom-6' /> */}
                </div>

            </div>
        </>
    )
}
