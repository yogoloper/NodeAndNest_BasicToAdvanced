import { Cat, CatType } from './cats.models';
import { Request, Response } from 'express';

/**
 * 고양이 데이터 전체 조회
 */
export const readAllCats = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    // throw new Error('DB connection Error..');
    res.status(200).send({ success: true, data: { cats } });
  } catch (err: unknown) {
    res.status(400).send({
      success: false,
      error: err instanceof Error ? err.message : '에러 발생!',
    });
  }
};

/**
 * 특정 고양이 상세 조회
 */
export const getCatById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cat = Cat.find((cat) => cat.id === id);
    // throw new Error('DB connection Error..');
    res.status(200).send({ success: true, data: { cat } });
  } catch (err: unknown) {
    res.status(400).send({
      success: false,
      error: err instanceof Error ? err.message : '에러 발생!',
    });
  }
};

/**
 * 새로운 고양이 추가
 */
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (err: unknown) {
    res.status(400).send({
      success: false,
      error: err instanceof Error ? err.message : '에러 발생!',
    });
  }
};

/**
 * 고양이 데이터 업데이트
 */
export const updateCatById = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: { cat: result },
    });
  } catch (err: unknown) {
    res.status(400).send({
      success: false,
      error: err instanceof Error ? err.message : '에러 발생!',
    });
  }
};

/**
 * 고양이 데이터 부분 업데이트
 */
export const putCatById = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: { cat: result },
    });
  } catch (err: unknown) {
    res.status(400).send({
      success: false,
      error: err instanceof Error ? err.message : '에러 발생!',
    });
  }
};

/**
 * 고양이 데이터 삭제
 */
export const deleteCatById = (req: Request, res: Response) => {
  try {
    const params = req.params;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        result = Cat.filter((cat) => cat.id !== params.id);
      }
    });
    res.status(200).send({
      success: true,
      data: { cat: result },
    });
  } catch (err: unknown) {
    res.status(400).send({
      success: false,
      error: err instanceof Error ? err.message : '에러 발생!',
    });
  }
};