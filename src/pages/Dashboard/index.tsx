import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  Container,
  CardWrapper,
  ContentWrapper,
  CardHeader,
  ButtonAction,
  InfoImage,
  ButtonNewPost,
} from './styles';
import { FaHeart, FaPlus } from 'react-icons/fa';
import ModalPost from '../../Components/ModalPost';

interface Post {
  id: number;
  legenda: string;
  imagem: string;
  numCurtidas: number;
  curtiuPost: boolean;
  dono: {
    id: number;
    nome: string;
    email: string;
    numeroSeguidores: number;
    numeroSeguindo: number;
    avatar: string;
  };
}

const Dashboard: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    async function carregaDados() {
      const response = await api.get('feed', { params: { page } });
      setHasMore(!response.data.last);
      setData(response.data.content);
    }
    carregaDados();
  }, [page]);

  function carregarMaisDados() {
    setPage(page + 1);
    setData(data.concat(data));
  }

  return (
    <Container>
      <InfiniteScroll
        dataLength={data.length}
        next={carregarMaisDados}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data.map((item, index) => (
          <ContentWrapper key={index}>
            <CardWrapper>
              <CardHeader>
                <img
                  src={
                    item.dono.avatar ||
                    'https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png'
                  }
                  alt={
                    item.dono.avatar ||
                    'https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png'
                  }
                />
                <p>{item.dono.nome}</p>
              </CardHeader>
              <img width="200px" src={item.imagem} alt={item.imagem} />
              <InfoImage>
                {item.legenda}
                <ButtonAction disabled={item.curtiuPost}>
                  <FaHeart /> {item.numCurtidas}
                </ButtonAction>
              </InfoImage>
            </CardWrapper>
          </ContentWrapper>
        ))}
      </InfiniteScroll>
      <ButtonNewPost title="Novo Post" onClick={() => setOpenModal(true)}>
        <FaPlus size="30px" />
      </ButtonNewPost>
      <ModalPost open={openModal} changeModal={setOpenModal} />
    </Container>
  );
};

export default Dashboard;
