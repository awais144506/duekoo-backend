/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { UserResponseDto } from './dto/user-response.dto';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  // Mock Data
  const mockUser = {
    id: 'cmmtmvkrf0001hwea02lcgns4',
    email: 'awaisrasheed68@gmail.com',
    name: 'Ch Muhammad Awais',
    imageUrl: 'http://image.com',
    hasSeenWelcome: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Mock Service implementation
  const mockUserService = {
    findAll: jest.fn().mockResolvedValue([mockUser]),
    findById: jest.fn(),
    create: jest.fn().mockResolvedValue(mockUser),
    updateUserName: jest
      .fn()
      .mockResolvedValue({ ...mockUser, name: 'Updated Name' }),
    updateWelcomeStatus: jest
      .fn()
      .mockResolvedValue({ ...mockUser, hasSeenWelcome: true }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findById', () => {
    it('should return a UserResponseDto when user exists', async () => {
      // Arrange
      jest.spyOn(service, 'findById').mockResolvedValue(mockUser);

      // Act
      const result = await controller.findById('some-id');

      // Assert
      expect(result).toBeInstanceOf(UserResponseDto);
      expect(result.id).toEqual(mockUser.id);
      expect(service.findById).toHaveBeenCalledWith('some-id');
    });

    it('should throw NotFoundException when user does not exist', async () => {
      // Arrange
      jest.spyOn(service, 'findById').mockResolvedValue(null);

      // Act & Assert
      await expect(controller.findById('invalid-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('create', () => {
    it('should call service.create with correct DTO', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const dto = { email: 'test@test.com', name: 'Test' } as any;
      await controller.create(dto);
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('updateWelcomeStatus', () => {
    it('should update and return the updated user', async () => {
      const id = 'user-id';
      const status = true;

      await controller.updateWelcomeStatus(id, status);

      expect(service.updateWelcomeStatus).toHaveBeenCalledWith(id, status);
    });
  });
});
