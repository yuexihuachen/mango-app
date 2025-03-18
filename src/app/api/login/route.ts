// import { cookies } from 'next/headers';
import fetch from 'node-fetch';

export async function POST(req: Request) {
  const body = await req.json();
  // 定义要调用的外部 API 的 URL
  const apiUrl = `${process.env.API_URL}/login`;
  const config = {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };
  // 发起 GET 请求到外部 API
  const response = await fetch(apiUrl, config);
  // 检查响应状态
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // 解析响应的 JSON 数据
  const data = await response.json();
  // 将获取到的数据以 JSON 格式返回给客户端
  return Response.json(data);

  // const body = await request.json();
  // const { at, rt } = body;

  // const cookieStore = await cookies()
  // cookieStore.set('at', at);
  // cookieStore.set('rt', rt)

  // return Response.json({
  //   code: 0,
  //   msg: 'success',
  //   data: {}
  // })
}
