import React, { useState, useEffect, CSSProperties } from 'react';
import { useHistory, useParams, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import useGlobalModel from '@/model/useGlobalModel';
import Loading from '@/components/loading';
import Scroll2Top from '@/components/Scroll2Top';
import useNoteModel from '@/model/useNoteModel';
import MdPreview from '@/components/mdPreview';
import MdCatalog from '@/components/mdCatalog';
import Export from '@/components/export';
// import { throttle } from '@/utils';
import styles from './note-detail.scss';

// 详情
const NoteDetail: React.FC = () => {
  const { theme } = useGlobalModel((modal) => [modal.theme]);
  const {
    getNoteById,
    updateNoteById,
    fetchNoteById,
  } = useNoteModel((modal) => [
    modal.getNoteById,
    modal.updateNoteById,
    modal.fetchNoteById,
  ]);
  const { tag, tid } = useParams<{ tag: string; tid: string }>();
  const history = useHistory();
  const location = useLocation();
  const [mdtext, setMdtext] = useState('');
  const [showScroll2Top, setShowScroll2Top] = useState(false);
  const [toolsPositionStyle, setToolsPositionStyle] = useState<CSSProperties>();
  const [defaultCateActive, setDefaultCateActive] = useState<string>();

  useEffect(() => {
    init();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const init = async () => {
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll);

    const cache = getNoteById(tid);
    if (cache?.data) {
      setMdtext(cache.data);
      return;
    }

    try {
      // 请求数据
      const res: any = await fetchNoteById(tag, tid);
      console.log(res);
      if (res?.code === 0) {
        if (res.data.substring(0, 20).includes('<!DOCTYPE html>')) return;
        updateNoteById(tid, res.data);
        setMdtext(res.data);
      } else {
        console.log('数据没有了！');
        setMdtext('');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const resize = () => {
    const bodyWidth = document.body.clientWidth;
    const MAX_VIEW_WIDTH = 1100;
    const CONTENT_WIDTH = 800;
    const style =
      bodyWidth > MAX_VIEW_WIDTH
        ? { left: `${(bodyWidth - MAX_VIEW_WIDTH) / 2 + CONTENT_WIDTH + 20}px` }
        : { right: '12px' };
    setToolsPositionStyle(style);
    // throttle(() => {});
  };

  const onBack = () => {
    history.push('/');
  };

  // 点击目录标题
  const onCateClick = (hash: string) => {
    history.replace({ pathname: location.pathname, hash });
  };

  // markdown 渲染好了
  const onMdRendered = () => {
    const hash = location.hash.substr(1, location.hash.length);
    setTimeout(() => scrollToView(decodeURI(hash)), 0);
  };

  // 视图滚动到对应标题位置
  const scrollToView = (hash: string) => {
    if (!hash) return;
    const el = document.getElementById(hash) as HTMLElement;
    el?.scrollIntoView();
    setDefaultCateActive(hash);
  };

  const onScroll = () => {
    const top = document.body.scrollTop || document.documentElement.scrollTop;
    setShowScroll2Top(() => top > window.innerHeight);
  };

  return (
    <>
      <header className={`border-1px-bottom header`}>
        <div className="center-content back" onClick={onBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          &nbsp;首页
        </div>
      </header>
      <main className={`center-content ${styles['note-detail']}`}>
        {mdtext ? (
          <>
            <MdPreview mdtext={mdtext} onMdRendered={onMdRendered} />
            <MdCatalog
              mdtext={mdtext}
              defaultActive={defaultCateActive}
              position={toolsPositionStyle}
              onCateClick={onCateClick}
            >
              <Export id={tid} position={toolsPositionStyle} mdtext={mdtext}>
                <a href={`./#/md-editor/${tag}/${tid}`} className="link">
                  <button className="btn">编辑</button>
                </a>
              </Export>
            </MdCatalog>
          </>
        ) : (
          <Loading />
        )}
        {showScroll2Top && <Scroll2Top position={toolsPositionStyle} />}
      </main>
    </>
  );
};

export default NoteDetail;
