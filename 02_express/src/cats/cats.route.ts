import { Router } from 'express';
import { readAllCats, getCatById, createCat, updateCatById, putCatById, deleteCatById } from './cats.service';

const router = Router();

router.get('/cats', readAllCats); // 고양이 데이터 전체 조회
router.get('/cats/:id', getCatById); // 특정 고양이 상세 조회
router.post('/cats', createCat); // 새로운 고양이 추가
router.put('/cats/:id', updateCatById); // 고양이 데이터 업데이트
router.patch('/cats/:id', putCatById); // 고양이 데이터 부분 업데이트
router.delete('/cats/:id', deleteCatById); // 고양이 데이터 삭제

export default router;
