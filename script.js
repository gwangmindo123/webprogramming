document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.sidebar nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const albumDetails = {
        'Please Please Me (1963)': {
            img: 'https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe.jpg',
            description: '비틀즈의 데뷔 앨범으로, 밴드의 초기 로큰롤 사운드를 잘 보여줍니다.',
            tracks: ['I Saw Her Standing There', 'Misery', 'Anna (Go to Him)', 'Chains', 'Boys', 'Ask Me Why', 'Please Please Me']
        },
        'With the Beatles (1963)': {
            img: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Withthebeatles.jpg',
            description: '두 번째 정규 앨범으로, 자작곡과 커버곡이 함께 수록되어 있습니다.',
            tracks: ['It Won\'t Be Long', 'All I\'ve Got to Do', 'All My Loving', 'Don\'t Bother Me', 'Little Child', 'Till There Was You']
        },
        'A Hard Day\'s Night (1964)': {
            img: 'https://upload.wikimedia.org/wikipedia/en/4/48/A_Hard_Day%27s_Night_album.jpg',
            description: '동명의 영화 사운드트랙으로, 모든 곡이 레논-매카트니 자작곡으로 채워진 첫 앨범입니다.',
            tracks: ['A Hard Day\'s Night', 'I Should Have Known Better', 'If I Fell', 'I\'m Happy Just to Dance with You', 'And I Love Her']
        },
        'Sgt. Pepper\'s Lonely Hearts Club Band (1967)': {
            img: 'https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg',
            description: '콘셉트 앨범의 시초로 평가받는 명반으로, 사이키델릭 록의 영향을 보여줍니다.',
            tracks: ['Sgt. Pepper\'s Lonely Hearts Club Band', 'With a Little Help from My Friends', 'Lucy in the Sky with Diamonds', 'Getting Better', 'Fixing a Hole']
        },
        'The Beatles (White Album) (1968)': {
            img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg',
            description: '더블 앨범으로, 멤버들의 개성이 뚜렷하게 드러나는 다양한 장르의 곡들이 수록되어 있습니다.',
            tracks: ['Back in the U.S.S.R.', 'Dear Prudence', 'Glass Onion', 'Ob-La-Di, Ob-La-Da', 'Wild Honey Pie', 'While My Guitar Gently Weeps']
        },
        'Abbey Road (1969)': {
            img: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
            description: '비틀즈가 마지막으로 녹음한 앨범으로, 특히 B면에 수록된 메들리가 유명합니다.',
            tracks: ['Come Together', 'Something', 'Maxwell\'s Silver Hammer', 'Oh! Darling', 'Octopus\'s Garden', 'I Want You (She\'s So Heavy)']
        },
        'Let It Be (1970)': {
            img: 'https://upload.wikimedia.org/wikipedia/en/d/df/LetItBe.jpg',
            description: '비틀즈의 마지막 발매 앨범으로, "Get Back" 세션 당시의 녹음들이 포함되어 있습니다.',
            tracks: ['Two of Us', 'Dig a Pony', 'Across the Universe', 'I Me Mine', 'Dig It', 'Let It Be', 'Maggie Mae']
        }
    };

    const discographyList = document.querySelector('#discography ul');
    const albumDetailContainer = document.querySelector('#album-detail-container');

    discographyList.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            const albumName = item.textContent;
            const details = albumDetails[albumName];

            if (details) {
                albumDetailContainer.innerHTML = `
                    <div id="album-detail">
                        <h3>${albumName}</h3>
                        <div class="album-content">
                            <img src="${details.img}" alt="${albumName} cover">
                            <div>
                                <p>${details.description}</p>
                                <h4>주요 트랙</h4>
                                <ul>
                                    ${details.tracks.map(track => `<li>${track}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
                const albumDetailElement = document.querySelector('#album-detail');
                albumDetailElement.style.display = 'block';
                albumDetailElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
        // Add a pointer cursor to show items are clickable
        item.style.cursor = 'pointer';
    });
});

