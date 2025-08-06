import { CartEntity } from '../../app/entities/Cart';
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { ConfirmOrderModalController } from "./ConfirmOrderModalController";
interface ConfirmOrderModalProps {
  onConfirm: (productsCart: CartEntity[]) => void;
  orderMessage: string | undefined;
  linkWaMe: string;
  productsCart: CartEntity[];
}

export function ConfirmOrderModal({
  onConfirm,
  orderMessage,
  linkWaMe,
  productsCart,
}: ConfirmOrderModalProps) {
  const { closeConfirmationOrderModal, isConfirmationOrderModalOpen } =
    ConfirmOrderModalController();

  return (
    <Modal
      title="Confirmação do Pedido"
      open={isConfirmationOrderModalOpen}
      onClose={closeConfirmationOrderModal}
    >
      <div className="space-y-4">
        <p className="text-base text-gray-800">
          Tem certeza que deseja enviar este pedido para o WhatsApp?
        </p>

        <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-600 whitespace-pre-wrap">
            {orderMessage}
          </p>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            variant="ghost"
            className="px-4"
            onClick={closeConfirmationOrderModal}
          >
            Cancelar
          </Button>
          <a href={linkWaMe} target="_blank">
            <Button className="px-4" onClick={() => onConfirm(productsCart)}>
              Confirmar
            </Button>
          </a>
        </div>
      </div>
    </Modal>
  );
}
