import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="about" className="hero">
        <div className="container">
            <div className="profile">
            <img src="/images/profile.jpg" alt="プロフィール写真" className="profile-img" />
            <h2 className="profile-name">浅利 優斗 (Yuto Asari)</h2>
            <p className="profile-university">龍谷大学 先端理工学部 知能情報メディア課程</p>
            <p className="profile-affiliation">所属団体 プログラミング認定同好会Horizon</p>
            <p className="profile-bio">
                大学ではAIや画像処理、XRを学んでいます。<br />
                チームでアイデアを形にするプロセスに魅力を感じています。俯瞰力や全体を把握する力が強みです。
            </p>
            </div>
        </div>
        </section>
    );
};

export default Hero;