import React from 'react';
import type { Work } from '../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import LinkButton from './LinkButton';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Props = {
    work: Work | null;
    onClose: () => void;
};

const WorkModal: React.FC<Props> = ({ work, onClose }) => {
    if (!work) return null;

    return (
        <div className="modal" style={{ display: 'flex' }} onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={onClose}>&times;</span>
            
            <div className="modal-swiper-container">
            {work.video ? (
                <div className="video-container">
                    <iframe src={work.video} title={work.title} frameBorder="0" allowFullScreen></iframe>
                </div>
            ) : (
                <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    className="modal-swiper"
                >
                    {work.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={img} alt="detail" style={{width:'100%', maxHeight:'60vh', objectFit:'contain'}} />
                    </SwiperSlide>
                    ))}
                </Swiper>
            )}
            </div>

            <h2>{work.title}</h2>
            <ul>
                <li><strong>プロジェクト概要</strong><br/>{work.details.overview}</li>
                <li><strong>開発概要</strong><br/>
                    開発期間：{work.details.devPeriod}<br/>
                    チーム規模：{work.details.teamSize}<br/>
                    技術：{work.details.techStack}
                </li>
                <li><strong>担当箇所</strong><br/>{work.details.role}</li>
                <li><strong>技術的なポイント</strong>
                    <ul>
                        {work.details.techPoints.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </li>
                <li><strong>こだわりポイント</strong>
                    <ul>
                        {work.details.commitment.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </li>
            </ul>

            <div className="work-links">
            {work.links.map((link, index) => (
                <LinkButton
                    key={index}
                    href={link.url}
                    type={link.type}
                    note={link.note} // ボタンの文字を指定
                />
            ))}
            </div>
        </div>
        </div>
    );
};

export default WorkModal;