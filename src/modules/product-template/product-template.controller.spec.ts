import { Test, TestingModule } from '@nestjs/testing';
import { ProductTemplateController } from './product-template.controller';
// import { Response } from 'express';

describe('ProductTemplateController', () => {
  let controller: ProductTemplateController;

  // const resposneMock = {
  //   json: jest.fn(),
  //   status: jest.fn().mockReturnThis(),
  // } as unknown as Response;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductTemplateController],
    }).compile();

    controller = module.get<ProductTemplateController>(
      ProductTemplateController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // describe('Get all first', () => {
  //   it('should return a status 200 with null data', () => {
  //     controller.getAll(resposneMock);
  //     expect(resposneMock.status).toHaveBeenCalledWith(200);
  //     expect(resposneMock.json).toHaveBeenCalledWith({});
  //   });
  // });
});
