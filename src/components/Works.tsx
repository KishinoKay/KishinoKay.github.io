import React from 'react';
import type { Work } from '../types';
import { worksData } from '../data';
import LinkButton from './LinkButton';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Props = {
    onWorkClick: (work: Work) => void;
};

const Works: React.FC<Props> = ({ onWorkClick }) => {
    return (
        <section id="works" className="section">
        <div className="container">
            <h2 className="section-title">Works</h2>
            <div className="works-grid">
            {worksData.map((work) => (
                <div 
                key={work.id} 
                className="work-card" 
                onClick={() => onWorkClick(work)}
                >
                {work.video ? (
                    <div className="video-container">
                    <iframe 
                        src={work.video} 
                        title={work.title} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                    </div>
                ) : (
                    <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="swiper"
                    >
                    {work.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                        <img src={img} alt={`${work.title} ${idx + 1}`} />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                )}
                
                <div className="work-content">
                    <h3 className="work-title">{work.title}</h3>
                    <div className="work-summary">{work.summary}</div>
                    <div className="work-links">
                    {work.links.map((link, index) => (
                        <LinkButton
                            key={index}
                            label={link.label}
                            href={link.url}
                            type={link.type}
                            note={link.note} // ボタンの文字を指定
                        />
                    ))}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Works;