import { useRouter } from 'next/router'

const KnowledgeContent = () => {
  const router = useRouter()
  const { type } = router.query // 获取动态路由参数
  console.log('type', type)
  return <></>
}

export default KnowledgeContent
