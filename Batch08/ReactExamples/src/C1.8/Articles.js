import React, { Component } from 'react';

const articles = [
  {
    id: 1,
    title: 'Drone T1 Pro: cảm biến Sony, quay video 4K, lặn sâu 170 mét dưới nước',
    summary: 'Drone bay đã trở nên vô cùng phổ biến nhưng cũng có nhiều hạn chế khi sử dụng. An toàn vẫn luôn là vấn đề cần quan tâm khi dùng drone.',
    imageUrl: 'https://photo2.tinhte.vn/data/attachment-files/2020/11/5231290_cover_.jpg',
    url: 'https://tinhte.vn/thread/drone-t1-pro-cam-bien-sony-quay-video-4k-lan-sau-170-met-duoi-nuoc.3225744/',
    author: {
      name: 'Nam Air',
      avatarUrl: 'https://photo2.tinhte.vn/data/avatars/m/21/21346.jpg?1516076282',
    },
  },
  {
    id: 2,
    title: 'FPT Techday 2020 khai mạc: Trình diễn công nghệ, kết nối lãnh đạo doanh nghiệp với chuyên gia tư vấn',
    summary: 'FPT Techday được Tập đoàn FPT tổ chức thường niên từ 2013, năm 2020 là năm đầu tiên FPT đem Techday về Tp. HCM. Thường thì anh em có thể đăng ký tham dự Techday thông qua trang web của FPT…',
    imageUrl: 'https://photo2.tinhte.vn/data/attachment-files/2020/11/5231069_Cover.jpg',
    url: 'https://tinhte.vn/thread/fpt-techday-2020-khai-mac-trinh-dien-cong-nghe-ket-noi-lanh-dao-doanh-nghiep-voi-chuyen-gia-tu-van.3225693/',
    author: {
      name: 'Minh Dự',
      avatarUrl: 'https://photo2.tinhte.vn/data/avatars/m/38/38271.jpg?1562662865',
    },
  },
  {
    id: 3,
    title: 'FPT Techday 2020 khai mạc: Trình diễn công nghệ, kết nối lãnh đạo doanh nghiệp với chuyên gia tư vấn',
    summary: 'FPT Techday được Tập đoàn FPT tổ chức thường niên từ 2013, năm 2020 là năm đầu tiên FPT đem Techday về Tp. HCM. Thường thì anh em có thể đăng ký tham dự Techday thông qua trang web của FPT…',
    imageUrl: 'https://photo2.tinhte.vn/data/attachment-files/2020/11/5231069_Cover.jpg',
    url: 'https://tinhte.vn/thread/fpt-techday-2020-khai-mac-trinh-dien-cong-nghe-ket-noi-lanh-dao-doanh-nghiep-voi-chuyen-gia-tu-van.3225693/',
    author: {
      name: 'Minh Dự',
      avatarUrl: 'https://photo2.tinhte.vn/data/avatars/m/38/38271.jpg?1562662865',
    },
  },
];

class Article extends Component {
  render() {
    return (
      <div style={{ display: 'flex', marginBottom: 32 }}>
        <div>
          <img src={this.props.data.imageUrl} width={300} alt='' />
        </div>
        <div style={{ paddingLeft: 12 }}>
          <h3>{this.props.data.title}</h3>
          <p>{this.props.data.summary}</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img style={{ borderRadius: 16 }} src={this.props.data.author.avatarUrl} alt='' width={32} />
            <strong style={{ color: '#0768EA', marginLeft: 6 }}>{this.props.data.author.name}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default class Articles extends Component {
  render() {
    return (
      <div>
        {articles.map((a, index) => {
          return <Article data={a}></Article>;
        })}
      </div>
    );
  }
}
