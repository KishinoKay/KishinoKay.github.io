// src/components/Research.tsx
import React from 'react';
import { researchData } from '../data';

const Research: React.FC = () => {
    return (
        <section id="research" className="section">
        <div className="container">
            <h2 className="section-title">Research</h2>

            {/* 研究室の紹介 */}
            <div className="research-block">
            <h3>所属研究室：{researchData.lab.name}</h3>
            <p className="research-sub">{researchData.lab.sub}</p>
            
            <div className="research-content">
                <div className="research-img-wrapper">
                <img src={researchData.lab.image} alt="研究室の様子" />
                </div>
                <div className="research-text">
                <p style={{ whiteSpace: 'pre-wrap' }}>{researchData.lab.description}</p>
                    <div className="research-links" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                        {researchData.lab.links.map((link, index) => (
                        <a 
                            key={index}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="work-link github" // 黒いボタンのスタイルを再利用
                            style={{ fontSize: '0.9rem' }}
                        >
                            {link.label} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        ))}
                    </div>
                </div>
            </div>
            </div>

            <hr className="divider" />

            {/* 個人の研究 */}
            <div className="research-block">
            <h3>個人研究テーマ：{researchData.personal.theme}</h3>
                <div className="research-content reverse">
                    <div className="research-img-wrapper">
                    <img src={researchData.personal.image} alt="研究イメージ" />
                    </div>
                    <div className="research-text">
                    <h4>きっかけ</h4>
                    <p>{researchData.personal.motivation}</p>
                    
                    <h4>今後の目標</h4>
                    <p>{researchData.personal.goal}</p>
                    
                    <h4>現在の進捗</h4>
                    <p>{researchData.personal.progress}</p>
                    {researchData.personal.notionLink && (
                        <div className="notion-link-container">
                        <a 
                            href={researchData.personal.notionLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="notion-link"
                        >
                            <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
                            alt="Notion" 
                            className="notion-icon"
                            />
                            Learn more
                        </a>
                        <span className="notion-note">
                            ※Notionで詳細を見る
                        </span>
                        </div>
                    )}
                    </div>
                </div>

            </div>
        </div>
        </section>
    );
};

export default Research;