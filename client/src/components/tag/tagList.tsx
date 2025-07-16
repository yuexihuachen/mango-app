
import React, { useEffect, useState } from 'react';
import httpRequest from '@/lib/httpClient';
import { Response } from '@/types';
import { TagItem } from '@/types/tag';
import { message, Modal } from 'antd';
import { useAppDispatch } from '@/hooks';
import { updateState } from '@/features/tag/tagSlice';

const TagList = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tagList, setTagList] = useState<TagItem[]>([]);
  const [deTag, setDeTag] = useState<TagItem>();
  const handleOk = async () => {
    if (deTag?.tag_id) {
      const res = (await httpRequest.post(`/auth/tag/delete`, { id: deTag.tag_id })) as Response<any>;
      if (res?.code === 0) {
        message.success('删除成功');
        const newTagList = tagList.filter(tag => tag.tag_id !== deTag.tag_id);
        setTagList(newTagList)
      } else {
        message.error('删除失败');
      }
      setIsModalOpen(false);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fetchData = async () => {
    const res = (await httpRequest.post(`/auth/tag/find`, {})) as Response<any>;
    if (res?.code === 0) {
      setTagList(res.data)
    } else {
      message.error('请求失败')
    }
  };

  useEffect(() => {
    fetchData()
  }, [])
  const deleteTag = (tag: TagItem) => {
    setDeTag(tag)
    setIsModalOpen(true);
  };

  const editTag = async (tag: TagItem) => {
    dispatch(updateState({
      selectedTag: tag,
      tagTabId: '2'
    }))
  };
  return <>
    <div className="z-20 grid grid-cols-4 text-base bg-white gap-y-4">
      <div className="p-3 border-b border-gray-200">标签Id</div>
      <div className="p-3 border-b border-gray-200">标签名称</div>
      <div className="p-3 border-b border-gray-200">创建时间</div>
      <div className="p-3 border-b border-gray-200">
        <button
          type="button"
          onClick={fetchData}
          className="px-12 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          搜索
        </button>
      </div>
    </div>
    <div className="grid grid-cols-4 text-base pb-11">
      {tagList.map((tag: TagItem) => {
        const {
          tag_id,
          tag_name,
          create_date
        } = tag;
        return (
          <React.Fragment key={tag_id}>
            <div className="px-3 py-6 border-b border-gray-200">
              {tag_id}
            </div>
            <div className="px-3 py-6 border-b border-gray-200">
              {tag_name}
            </div>
            <div className="px-3 py-6 border-b border-gray-200">
              {create_date}
            </div>
            <div className="px-3 py-6 border-b border-gray-200 cursor-pointer">
              <span className="flex items-center ml-auto font-medium text-indigo-600">
                <span
                  onClick={() => editTag(tag)}
                  className="pointer-events-auto hover:text-indigo-500"
                >
                  <img
                    className="w-4 h-4"
                    src={`/edit.svg`}
                    alt="Your Company"
                  />
                </span>
                <span className="w-px h-6 mx-3 bg-slate-400/20"></span>
                <span
                  onClick={() => deleteTag(tag)}
                  className="pointer-events-auto hover:text-indigo-500"
                >
                  <img
                    className="w-4 h-4"
                    src={`/delete.svg`}
                    alt="Your Company"
                  />
                </span>
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
    <Modal
      title="确认删除当前类别信息"
      okText={'确认'}
      cancelText={'取消'}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
    </Modal>
  </>
}

export default TagList