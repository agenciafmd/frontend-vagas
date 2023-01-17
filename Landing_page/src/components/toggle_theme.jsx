import { AnimatePresence, motion } from 'framer-motion';
import { 
  IconButton, 
  useColorMode, 
  useColorModeValue 
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export function ThemeToggle() {
  const {toggleColorMode} = useColorMode();
  return(
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          onClick={toggleColorMode}
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
        >
        </IconButton>
        
      </motion.div>
    </AnimatePresence>
  );
}